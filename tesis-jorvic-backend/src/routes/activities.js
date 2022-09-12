const router = require("express").Router();
const {
   createActivities,
   getAllActivities,
   getActivitiesById,
} = require("../controller/activities.js");
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
//console.log(path.dirname(__dirname));
const upload = multer({ storage });

router.get("/activities", getAllActivities);
router.post("/activities", upload.array("productPicture"), createActivities);
router.post("/activities/:id", getActivitiesById);

router.use((_req, res) => res.status(404).json("Not found"));

module.exports = router;
