var express = require('express');
var router = express.Router();

var applyForm = require('./applyForm');
var applyDetail = require('./applyDetail');
router.get('/form', function(req, res) { applyForm.form(req, res); });
router.get('/detail/:formSn', function(req, res) { applyForm.detail(req, res); });
module.exports = router;

