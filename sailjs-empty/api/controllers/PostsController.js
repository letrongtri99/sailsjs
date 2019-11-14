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

        return res.view('pages/articlemanager')

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

        Posts.count().exec((error, data) => {
            total = data;
        });
        rawMongoCollection.aggregate([{
                $lookup: {
                    from: "user",
                    localField: "author",
                    foreignField: "_id",
                    as: "tri"
                }
            }, { $unwind: "$tri" },
            { $match: { $or: [{ title: { $regex: req.query.search.value } }, { "tri.name": { $regex: req.query.search.value } }] } }, { $sort: b }, { $skip: Number(req.query.start) }, { $limit: Number(req.query.length) }
        ]).toArray((e, a) => {

            var r = [];
            a.forEach(e => {
                r.push([e._id, e.title, e.makeday, e.tri.name, "<a class='btn btn-info' href='/postdetail/" + e._id + "' role='button'>View</a> <a class='btn btn-info' href='/editpost/" + e._id + "' role='button'>Edit</a> <a href='/posts/delete/" + e._id + "' class='btn btn-info' role='button'>Delete</a>"]);
            });

            rawMongoCollection.aggregate([{
                    $lookup: {
                        from: "user",
                        localField: "author",
                        foreignField: "_id",
                        as: "tri"
                    }
                }, { $unwind: "$tri" },
                { $match: { $or: [{ title: { $regex: req.query.search.value } }, { "tri.name": { $regex: req.query.search.value } }] } }, { $count: "pass" }
            ]).toArray((error, data6) => {
                res.json({
                    "draw": req.query.draw,
                    "recordsTotal": total,
                    "recordsFiltered": data6[0].pass,
                    "data": r
                })
            })




        })

    }
};