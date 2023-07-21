const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/assets/images/bookPicture"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-book-${file.originalname}`);
  },
});

const upload = multer({ storage });

const uploadBookImage = (req, res, next) => {
  upload.single("picture")(req, res, (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      req.body.picture = req.file.filename;
      next();
    }
  });
};

module.exports = { uploadBookImage };
