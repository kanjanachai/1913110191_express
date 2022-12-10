const express = require("express");
const router = express.Router();
const staffController = require("../controllers//staffController");

router.get("/", staffController.index);
// 63942d8c19d4f709103eb9fa
router.get("/:id", staffController.show);

router.delete("/:id", staffController.destroy);

router.put("/:id", staffController.update);

router.post("/", staffController.insert);

module.exports = router;