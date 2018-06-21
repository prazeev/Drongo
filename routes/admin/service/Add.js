var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('admin/service/add.ejs');
});

module.exports = router;
