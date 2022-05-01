var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/error', function(req, res, next) {
  res.render('error', { title: 'Error 404' });
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
