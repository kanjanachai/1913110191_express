var express = require("express");
var router = express.Router();

const companyController = require("../controllers/companyController");

/* GET home page. */
router.get("/", function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.status(200).json({
    message: "Hello Index",
  });
});

router.get("/company", companyController.company);

module.exports = router;
