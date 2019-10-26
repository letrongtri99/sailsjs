/**
 * Posts.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        title: {
            type: 'string',
            required: true
        },
        picture: {
            type: 'string',
            required: true
        },
        description: {
            type: 'string',
            required: true
        },
        author: {
            model: 'user'
        }
    },

};