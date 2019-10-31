module.exports = async function(req, res, proceed) {

    if (!req.session.currentUser) {
        return proceed();
    } else {
        req.session.flash = {
            message: "You signed in"
        }
        res.redirect('/error');
    }

};