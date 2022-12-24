const express = require("express");
const router = express.Router();
const shopController = require("../controllers//shopController");

router.get("/", shopController.shop);
router.get("/:id", shopController.shopmenu);
router.get("/menu", shopController.menu);

module.exports = router;