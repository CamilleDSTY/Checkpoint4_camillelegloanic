const express = require("express");

const router = express.Router();

const userControllers = require("../controllers/userControllers");
const authControllers = require("../controllers/authControllers");

router.get("/", userControllers.browse);
router.get("/:id", userControllers.read);
router.put("/:id", userControllers.edit);
router.post(
  "/",
  userControllers.hashPassword,
  userControllers.add,
  userControllers.read
);
router.post("/login", userControllers.login, authControllers.createToken);

module.exports = router;
