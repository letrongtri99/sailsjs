/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const moment = require('moment');
module.exports = {
    create: async function(req, res, next) {
        const { email, role, pass, name } = req.body;
        // User.create({name:name,title:title,pass:pass,email:email}).exec((error,data)=>{
        //     console.log(data);
        // });
        var existUser = await User.findOne({ email: email });
        if (existUser) {
            res.json({
                success: false,
                message: 'Account exist'
            })
        } else {
            var createUser = await User.create({ name: name, role: role, pass: pass, email: email }).fetch();
            if (createUser) {
                res.json({
                    success: true,
                    data: createUser
                })
            } else {
                res.json({
                    success: false
                })
            }
        }

    },
    show: function(req, res, next) {
        // var showUser = await User.find();
        // res.json({
        //     data: showUser
        // })
        User.find().exec((error, data) => {
            return res.view('pages/showuser', { nguoi: data });
        })
    },
    signinNow: async function(req, res, next) {
        // var timeStamp = Math.floor(Date.now() / 1000);
        const { email, pass } = req.body;
        var nowUser = await User.findOne({ email: email });
        if (!nowUser) {
            res.json({
                success: false,
                message: 'Account is not signed up'
            })
        } else {
            if (nowUser.status == 'Vô Hiệu Hóa' || nowUser.isDeleted == 1) {
                res.json({
                    success: false,
                    message: 'Account is deactived'
                })
            } else if (nowUser.pass === pass) {
                req.session.currentUser = {
                    email: nowUser.email,
                    pass: nowUser.pass,
                    role: nowUser.role,
                    name: nowUser.name,
                    id: nowUser.id
                }
                var ts = new Date();
                var time = ts.toLocaleString("vi-VN", { timeZone: "Asia/Bangkok" })
                User.update({ id: req.session.currentUser.id }, {
                    last_login: time
                }).fetch().exec((error, data) => {})
                res.json({
                    success: true,
                    message: 'Login success',
                    data: nowUser
                })
            } else {
                res.json({
                    success: false,
                    message: 'Password is incorrect'
                })
            }
        }
    },
    checkSession: async function(req, res, next) {
        if (req.session.currentUser) {
            res.json({
                success: true,
                data: req.session.currentUser
            })
        } else {
            res.json({
                success: false,
                message: 'No account avaiable'
            })
        }
    },
    logout: async function(req, res, next) {
        req.session.destroy((error) => {
            if (error) {
                res.status(500).json({
                    success: false,
                    message: error.message,
                });
            } else {
                res.status(200).json({
                    success: true,
                    message: 'Logout success!',
                });
            }
        })
    },
    delete: function(req, res, next) {
        User.update({ id: req.params.id }, {
            isDeleted: 1
        }).fetch().exec((error, data) => {
            if (error) {
                res.json({
                    success: false,
                    message: 'Deleted failed'
                })
            } else {
                res.json({
                    success: true,
                    message: 'Deleted success'
                })
            }

        })

    },
    update: function(req, res, next) {
        if (req.body.role != 'Admin') {
            if (req.body.pass) {
                User.update({ id: req.params.id }, {
                    email: req.body.email,
                    role: req.body.role,
                    name: req.body.name,
                    pass: req.body.pass,
                    status: req.body.status
                }).exec((error, data) => {

                })
            } else {
                User.update({ id: req.params.id }, {
                    email: req.body.email,
                    role: req.body.role,
                    name: req.body.name,
                    status: req.body.status
                }).exec((error, data) => {

                })
            }
        } else {
            if (req.body.pass) {
                req.session.currentUser = {
                    email: req.body.email,
                    pass: req.body.pass,
                    role: req.body.role,
                    name: req.body.name,
                }
                User.update({ id: req.params.id }, {
                    email: req.body.email,
                    name: req.body.name,
                    pass: req.body.pass
                }).exec((error, data) => {

                })
            } else {
                req.session.currentUser = {
                    email: req.body.email,
                    role: req.body.role,
                    name: req.body.name,
                }
                User.update({ id: req.params.id }, {
                    email: req.body.email,
                    name: req.body.name,
                }).exec((error, data) => {

                })
            }
        }
        res.redirect('/showuser');
    },
    error: (req, res, next) => {
        res.view('404');
    },
    makepost: (req, res, next) => {
        res.view('pages/makepost');
    },
    signin: (req, res, next) => {
        res.view('pages/signin');
    },
    signup: (req, res, next) => {
        res.view('pages/signup');
    },
    getDataUser: (req, res) => {
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
        var db = User.getDatastore().manager;
        var rawMongoCollection = db.collection(User.tableName);

        User.count({ isDeleted: 0 }).exec((error, data) => {
            total = data;
        });
        rawMongoCollection.aggregate([
            { $match: { $or: [{ name: { $regex: req.query.search.value, $options: 'i' } }, { status: { $regex: req.query.search.value, $options: 'i' } }, { role: { $regex: req.query.search.value, $options: 'i' } }] } }, { $sort: b }, { $skip: Number(req.query.start) }, { $limit: Number(req.query.length) }
        ]).toArray((e, a) => {

            var r = [];
            a.forEach(e => {
                if (e.isDeleted == 0 && e.email != req.session.currentUser.email) {
                    r.push([e._id, e.name, e.post, e.status, e.role, e.last_login, " <a class='btn btn-info' href='' role='button' data-toggle='modal' data-target='#h1" + e._id + "' id='edit'>Edit</a> <button onclick='me(\"" + e._id + "\")' class='btn btn-info' role='button'>Delete</button>"]);
                } else if (e.isDeleted == 0 && e.email == req.session.currentUser.email) {
                    r.push([e._id, e.name, e.post, e.status, e.role, e.last_login, " <a class='btn btn-info' href='' role='button' data-toggle='modal' data-target='#h1" + e._id + "' id='edit'>Edit</a> "]);
                }
            });

            rawMongoCollection.aggregate([
                { $match: { $or: [{ name: { $regex: req.query.search.value, $options: 'i' } }, { status: { $regex: req.query.search.value, $options: 'i' } }, { role: { $regex: req.query.search.value, $options: 'i' } }], isDeleted: 0 } }, { $count: "pass" }
            ]).toArray((error, data6) => {

                if (data6.length == 0) {
                    res.json({
                        "draw": req.query.draw,
                        "recordsTotal": total,
                        "recordsFiltered": 0,
                        "data": r
                    })
                } else {
                    res.json({
                        "draw": req.query.draw,
                        "recordsTotal": total,
                        "recordsFiltered": data6[0].pass,
                        "data": r
                    })
                }
            })




        })
    }
};