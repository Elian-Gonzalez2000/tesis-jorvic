const router = require("express").Router();
const { activities } = require("../controller/activities.js");
const multer = require("multer");
const path = require("path");
const shortid = require("shortid");

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), "uploads"));
   },
   filename: function (req, file, cb) {
      cb(null, `${shortid.generate()}-${file.originalname}`);
   },
});

router.post("/activities", activities);

router.use((_req, res) => res.status(404).json("Not found"));

module.exports = router;
