const express = require("express");
const router = express.Router();
const shopController = require("../controllers//shopController");

const { body } = require('express-validator');

router.get("/", shopController.shop);
router.get("/:id", shopController.shopmenu);
router.get("/menu", shopController.menu);

router.post("/", [
    body('name').not().isEmpty().withMessage("กรุณาป้อนชื่อสกุลด้วย"),
    body('location').not().isEmpty().withMessage("กรุณาป้อนที่อยู่"),
    // body('photo').not().isEmpty().withMessage("กรุณาเพิ่มรูปภาพ")
], shopController.insert);

module.exports = router;