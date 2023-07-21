const router = require("express").Router();
const booksRouter = require("./books.routes");
const userRouter = require("./users.routes");
const commentaryRouter = require("./commentaries.routes");

router.use("/books", booksRouter);
router.use("/users", userRouter);
router.use("/commentaries", commentaryRouter);
module.exports = router;
