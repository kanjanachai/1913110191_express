var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    fullname: 'Kanjanachai Yaowarat'
  })
});

router.get('/bio', function(req, res, next) {
  res.status(200).json({
    fullname: 'Kanjanachai Yaowarat',
    nickname: 'Lin',
    hobby: 'sleep',
    gitusername: 'kanjanachai'
  })
});

module.exports = router;
