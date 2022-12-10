///
const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController");

router.get("/", companyController.company);

router.post("/", companyController.insert);

router.delete("/:id", companyController.destroy);

router.put("/:id", companyController.update);



module.exports = router;