const router = require("express").Router();
const { signin, signup } = require("../controller/auth.js");

router.post("/signin", signin);
router.post("/signup", signup);

module.exports = router;
