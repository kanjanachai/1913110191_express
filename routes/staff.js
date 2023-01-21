const express = require("express");
const router = express.Router();
const staffController = require("../controllers//staffController");

const { body } = require('express-validator');

router.get("/", staffController.index);
// 63942d8c19d4f709103eb9fa
router.get("/:id", staffController.show);

router.delete("/:id", staffController.destroy);

router.put("/:id", staffController.update);

router.post("/", [
    body('name').not().isEmpty().withMessage("กรุณาป้อนชื่อสกุลด้วย"),
    // body('photo').not().isEmpty().withMessage("กรุณาเพิ่มรูปภาพ") ///
], staffController.insert);

module.exports = router;