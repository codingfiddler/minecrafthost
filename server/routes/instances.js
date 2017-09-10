var express = require('express');
var router = express.Router();
var util = require('../util/util');

router.get('/', function(req, res, next) {
    //Send a list of available instances


});

router.post('/', function(req, res, next){
   // Create a new minecraft instance.

   util.createServer();

});

module.exports = router;
