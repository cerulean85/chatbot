var express = require('express');
const { route } = require('./user/apply');
var router = express.Router();

router.get('/', function(req, res, next) {

    res.send('index page');
});

module.exports = router;