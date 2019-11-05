/**
 * PostsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    upload: (req, res) => {
        req.file('picture').upload({
            dirname: require('path').resolve(sails.config.appPath, 'assets/images')
        }, function(err, uploadedFiles) {
            const urlParts = uploadedFiles[0].fd.split("/");
            const picName = urlParts[urlParts.length - 1];
            res.json({
                url: `http://localhost:1337/images/${picName}`
            })
        })
    },
    create: (req, res) => {
        Posts.create({
            title: req.body.title,
            picture: req.body.picture,
            description: req.body.description,
            author: req.session.currentUser.id
        }).fetch().exec((error, data) => {
            var ts = new Date();
            var time = ts.toLocaleString("vi-VN", { timeZone: "Asia/Bangkok" })
            Posts.update({ id: data.id }, {
                makeday: time
            }).fetch().exec((error, data) => {})
            User.findOne({ id: data.author }).exec((error2, data2) => {
                up = ++data2.post;
                User.update({ id: data.author }, { post: up }).fetch().exec((error3, data3) => {})
            })
            if (error) {
                res.json({
                    success: false,
                    message: 'Create Post Failed'
                })
            } else {
                res.json({
                    success: true,
                    message: 'Create Post Success'
                })
            }
        })
    },
    show: (req, res) => {
        var pageNumber = Number(req.query.pageNumber);
        var total;
        Posts.count().exec((error, data) => {
            total = data;
        });
        if (!req.query.pageNumber) {
            Posts.find({ limit: 5, skip: 0 }).populate('author').sort([{ createdAt: 'desc' }]).exec((error, data) => {
                return res.view('pages/index', { post: data, total: total, page: 1 })
            })
        } else {
            Posts.find({ limit: 5, skip: 5 * (pageNumber - 1) }).populate('author').sort([{ createdAt: 'desc' }]).exec((error, data) => {
                return res.view('pages/index', { post: data, total: total, page: pageNumber })
            })
        }

    },
    showInfo: (req, res) => {
        Posts.find().populate('author').sort([{ createdAt: 'desc' }]).exec((error, data) => {
            return res.view('pages/articlemanager', { post: data })
        })
    },
    detail: (req, res) => {
        Posts.findOne({ id: req.params.id }).populate('author').exec((error, data) => {
            if (!data) {
                req.session.flash = {
                    message: "No post found"
                }
                res.redirect('/error');
            } else {
                res.view('pages/detailpost', { detail: data });
            }
        })
    },
    delete: (req, res) => {
        Posts.findOne({ id: req.params.id }).populate('author').exec((error, data) => {
            User.findOne({ id: data.author.id }).exec((error2, data2) => {
                down = --data2.post;
                User.update({ id: data.author.id }, { post: down }).fetch().exec((error3, data3) => {
                    Posts.destroy({ id: req.params.id }).exec((error4, data4) => {
                        res.redirect('/article');
                    })
                })
            })
        })

    },
    detailsedit: (req, res) => {
        Posts.findOne({ id: req.params.id }).populate('author').exec((error, data) => {
            if (!data) {
                req.session.flash = {
                    message: "No post found"
                }
                res.redirect('/error');
            } else {
                res.view('pages/editpost', { detailsedit: data });
            }
        })
    },
    update: (req, res) => {
        Posts.update({ id: req.params.id }, {
            title: req.body.title,
            picture: req.body.picture,
            description: req.body.description
        }).fetch().exec((error, data) => {
            if (data) {
                res.json({
                    message: 'Update success'
                })
            } else {
                res.json({
                    message: 'Update failed'
                })
            }
        })
    }
};