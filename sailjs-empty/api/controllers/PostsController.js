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
        console.log(req.body);
        Posts.create({
            title: req.body.title,
            picture: req.body.picture,
            description: req.body.description,
            author: req.session.currentUser.id
        }).fetch().exec((error, data) => {
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
        Posts.find().populate('author').sort([{ createdAt: 'desc' }]).exec((error, data) => {
            return res.view('pages/index', { post: data })
        })
    },
    showInfo: (req, res) => {
        Posts.find().populate('author').sort([{ createdAt: 'desc' }]).exec((error, data) => {
            return res.view('pages/articlemanager', { post: data })
        })
    },
    detail: (req, res) => {
        Posts.findOne({ id: req.params.id }).populate('author').exec((error, data) => {
            res.view('pages/detailpost', { detail: data });
        })
    },
    delete: (req, res) => {
        Posts.destroy({ id: req.params.id }).exec((error, data) => {
            res.redirect('/article');
        })
    }
};