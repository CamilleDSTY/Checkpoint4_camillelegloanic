const express = require("express");

const router = express.Router();

const commentaryControllers = require("../controllers/commentaryControllers");

router.get("/", commentaryControllers.browse);
router.get("/:id", commentaryControllers.read);
router.put("/:id", commentaryControllers.edit);
router.post("/", commentaryControllers.add);
router.delete("/:id", commentaryControllers.destroy);

module.exports = router;
