///
const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController");
const passportJWT = require('../middleware/passportJWT')
const checkAdmin = require('../middleware/checkAdmin')

router.get("/", [passportJWT.isLogin, checkAdmin.isAdmin], companyController.company);

router.post("/", companyController.insert);

router.delete("/:id", companyController.destroy);

router.put("/:id", companyController.update);



module.exports = router;