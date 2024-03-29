/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

    /***************************************************************************
     *                                                                          *
     * Make the view located at `views/homepage.ejs` your home page.            *
     *                                                                          *
     * (Alternatively, remove this and add an `index.html` file in your         *
     * `assets` directory)                                                      *
     *                                                                          *
     ***************************************************************************/


    'get /showuser': 'UserController.show',
    'get /signup': 'UserController.signup',
    'get /signin': 'UserController.signin',
    '/makepost': 'UserController.makepost',
    'get /api/random-quote': 'QuoteController.getQuote',
    'get /api/protected/random-quote': 'QuoteController.getProtectedQuote',
    'post /user/create': 'UserController.create',
    'post /user/signin': 'UserController.signinNow',
    'get /user/show': 'UserController.show',
    'get /user/checkSession': 'UserController.checkSession',
    'get /user/logout': 'UserController.logout',
    'get /user/delete/:id': 'UserController.delete',
    'post /user/update/:id': 'UserController.update',
    'post /posts/upload': 'PostsController.upload',
    'post /posts/createpost': 'PostsController.create',
    'get /posts/delete/:id': 'PostsController.delete',
    'get /': 'PostsController.show',
    'get /postdetail/:id': 'PostsController.detail',
    'get /article': 'PostsController.showInfo',
    'get /editpost/:id': 'PostsController.detailsedit',
    'post /updatepost/:id': 'PostsController.update',
    'get /error': 'UserController.error',
    'get /getDataTable': 'PostsController.getDataTable',
    'get /getDataUser': 'UserController.getDataUser'
        /***************************************************************************
         *                                                                          *
         * More custom routes here...                                               *
         * (See https://sailsjs.com/config/routes for examples.)                    *
         *                                                                          *
         * If a request to a URL doesn't match any of the routes in this file, it   *
         * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
         * not match any of those, it is matched against static assets.             *
         *                                                                          *
         ***************************************************************************/


};