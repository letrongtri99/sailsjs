module.exports = async function(req, res, proceed) {

    if (req.session.currentUser && req.session.currentUser.role == 'Admin') {
        return proceed();
    } else {
        req.session.flash = {
            message: "You aren't allowed to access this link"
        }
        res.redirect('/error');
    }

};