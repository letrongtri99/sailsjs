/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {
    '*': 'flash',
    UserController: {
        // Apply the 'isLoggedIn' policy to the 'update' action of 'UserController'
        show: ['isAdmin', 'flash'],
        makepost: ['isEditorAdmin', 'flash'],
        signin: ['isSignIn', 'flash'],
        delete: ['isAdmin', 'flash'],
        update: ['isAdmin', 'flash']
    },
    PostsController: {
        showInfo: ['isEditorAdmin', 'flash'],
        upload: ['isEditorAdmin', 'flash'],
        create: ['isEditorAdmin', 'flash'],
        delete: ['isEditorAdmin', 'flash'],
        detailsedit: ['isEditorAdmin', 'flash'],
        update: ['isEditorAdmin', 'flash']
    },



    /***************************************************************************
     *                                                                          *
     * Default policy for all controllers and actions, unless overridden.       *
     * (`true` allows public access)                                            *
     *                                                                          *
     ***************************************************************************/

    // '*': true,

};