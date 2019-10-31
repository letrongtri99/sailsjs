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
            if (nowUser.status == 'Vô Hiệu Hóa') {
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
        User.destroy({ id: req.params.id }).exec((error, data) => {
            res.redirect('/showuser');
        })

    },
    update: function(req, res, next) {
        if (req.body.role != 'Admin') {
            User.update({ id: req.params.id }, {
                email: req.body.email,
                role: req.body.role,
                name: req.body.name,
                pass: req.body.pass,
                status: req.body.status
            }).exec((error, data) => {

            })
        } else {
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
    }
};