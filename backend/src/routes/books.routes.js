const express = require("express");

const router = express.Router();

const bookControllers = require("../controllers/bookControllers");
const uploadBookImage = require("../controllers/uploadControllers");

router.get("/", bookControllers.browse);
router.get("/:id", bookControllers.read);
router.put("/:id", bookControllers.edit);
router.post("/", uploadBookImage.uploadBookImage, bookControllers.add);
router.delete("/:id", bookControllers.destroy);

module.exports = router;
