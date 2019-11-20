/**
 * PostsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const fs = require('fs');
module.exports = {
    upload: (req, res) => {
        req.file('picture').upload({
            dirname: require('path').resolve(sails.config.appPath, 'assets/images')
        }, function(err, uploadedFiles) {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Upload failed'
                })
            } else {
                const urlParts = uploadedFiles[0].fd.split("/");
                const picName = urlParts[urlParts.length - 1];
                return res.json({
                    url: `http://localhost:1337/images/${picName}`
                })
            }
        })
    },
    create: (req, res) => {
        var author;
        Posts.create({
            title: req.body.title,
            picture: req.body.picture,
            description: req.body.description,
            author: req.session.currentUser.id
        }).fetch().then((data) => {

            author = data.author;
            var ts = new Date();
            var time = ts.toLocaleString("vi-VN", { timeZone: "Asia/Bangkok" });
            return Posts.update({ id: data.id }, { makeday: time }).fetch();
        }).then((data2) => {
            return User.findOne({ id: author })
        }).then((data3) => {
            var up = ++data3.post;
            return User.update({ id: author }, { post: up }).fetch();

        }).then((data4) => {
            return res.json({
                success: true,
                message: 'Create Post Success'
            })
        }).catch((e) => {
            return res.json({
                success: false,
                message: 'Create Post Failed'
            })
        })
    },
    show: (req, res) => {
        var pageNumber = Number(req.query.pageNumber);
        var total;
        Posts.count().then((data) => {
            total = data;
            if (!req.query.pageNumber) {
                return Posts.find({ limit: 5, skip: 0 }).populate('author').sort([{ createdAt: 'desc' }])
            } else {
                return Posts.find({ limit: 5, skip: 5 * (pageNumber - 1) }).populate('author').sort([{ createdAt: 'desc' }])
            }

        }).then((data2) => {
            return res.view('pages/index', { post: data2, total: total, page: req.query.pageNumber ? pageNumber : 1 })
        }).catch((e) => {
            req.session.flash = {
                message: e
            }
            return res.redirect('/error');
        })

    },
    showInfo: (req, res) => {
        return res.view('pages/articlemanager')

    },
    detail: (req, res) => {
        Posts.findOne({ id: req.params.id }).populate('author').exec((error, data) => {
            if (error) {
                req.session.flash = {
                    message: error
                }
                return res.redirect('/error');
            } else if (!data) {
                req.session.flash = {
                    message: "No post found"
                }
                return res.redirect('/error');
            } else {
                return res.view('pages/detailpost', { detail: data });
            }
        })
    },
    delete: (req, res) => {
        var url;
        var idauthor;
        Posts.findOne({ id: req.params.id }).populate('author').then((data) => {
            idauthor = data.author.id;
            url = data.picture;
            return User.findOne({ id: data.author.id });
        }).then((data2) => {
            down = --data2.post;
            return User.update({ id: idauthor }, { post: down }).fetch();
        }).then((data3) => {
            return Posts.destroy({ id: req.params.id });
        }).then((data4) => {
            const urlParts = url.split("/");
            const picName = urlParts[urlParts.length - 1];
            fs.unlinkSync(`assets/images/${picName}`);
            return res.redirect('/article')
        }).catch((e) => {
            return res.json({
                success: false,
                message: e
            })
        })

    },
    detailsedit: (req, res) => {
        Posts.findOne({ id: req.params.id }).populate('author').exec((error, data) => {
            if (error) {
                req.session.flash = {
                    message: error
                }
                return res.redirect('/error');
            } else if (!data) {
                req.session.flash = {
                    message: "No post found"
                }
                return res.redirect('/error');
            } else {
                return res.view('pages/editpost', { detailsedit: data });
            }
        })
    },
    update: (req, res) => {
        Posts.update({ id: req.params.id }, {
            title: req.body.title,
            picture: req.body.picture,
            description: req.body.description
        }).fetch().exec((error, data) => {
            if (error) {
                return res.json({
                    message: 'Update error'
                })
            } else if (data) {
                return res.json({
                    message: 'Update success'
                })
            } else {
                return res.json({
                    message: 'Update failed'
                })
            }
        })
    },
    getDataTable: (req, res) => {
        var orderColumn = req.query.order[0].column;
        var nameColumn = req.query.columns[orderColumn].name;
        var dir;
        if (req.query.order[0].dir == 'asc') {
            dir = 1;
        } else {
            dir = -1;
        }
        var b = {};
        b[nameColumn] = dir;
        var pageNumber = Number(req.query.start);
        var total;
        var db = Posts.getDatastore().manager;
        var rawMongoCollection = db.collection(Posts.tableName);
        var r = [];
        Posts.count().then((data) => {
            total = data;
            return rawMongoCollection.aggregate([{
                    $lookup: {
                        from: "user",
                        localField: "author",
                        foreignField: "_id",
                        as: "tri"
                    }
                }, { $unwind: "$tri" },
                { $match: { $or: [{ title: { $regex: req.query.search.value, $options: 'i' } }, { "tri.name": { $regex: req.query.search.value, $options: 'i' } }] } }, { $sort: b }, { $skip: Number(req.query.start) }, { $limit: Number(req.query.length) }
            ]).toArray();
        }).then((data2) => {
            data2.forEach(e => {
                r.push([e._id, e.title, e.makeday, e.tri.name, `<a class='btn btn-info' href='/postdetail/${e._id}' role='button'>View</a> <a class='btn btn-info' href='/editpost/${e._id}' role='button'>Edit</a> <a href='/posts/delete/${e._id}' onclick="return confirm('Are you sure you want to delete this article?');" class='btn btn-info' role='button'>Delete</a>`]);
            });
            return rawMongoCollection.aggregate([{
                    $lookup: {
                        from: "user",
                        localField: "author",
                        foreignField: "_id",
                        as: "tri"
                    }
                }, { $unwind: "$tri" },
                { $match: { $or: [{ title: { $regex: req.query.search.value, $options: 'i' } }, { "tri.name": { $regex: req.query.search.value, $options: 'i' } }] } }, { $count: "pass" }
            ]).toArray();
        }).then((data3) => {
            return res.json({
                "draw": req.query.draw,
                "recordsTotal": total,
                "recordsFiltered": data3.length == 0 ? 0 : data3[0].pass,
                "data": r
            })
        }).catch((e) => {
            return res.json({
                success: false,
                message: e
            })
        })

    }
};