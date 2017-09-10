/* Utility functions for working with Minecraft servers */

var shortid = require('shortid');
var fs = require('fs');

var exports = module.exports = {};

exports.createServer = function() {

    var id = shortid.generate();
    fs.mkdir(id, (err) => {
        if (err) {
            console.err(err);
        }

    });
};

