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
            description: req.body.description
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
        Posts.find().sort([{ createdAt: 'desc' }]).exec((error, data) => {
            return res.view('pages/index', { post: data })
        })
    }
};