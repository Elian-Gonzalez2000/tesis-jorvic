const router = require("express").Router();
const { activities } = require("../controller/activities.js");

router.post("/activities", activities);

router.use((_req, res) => res.status(404).json("Not found"));

module.exports = router;
