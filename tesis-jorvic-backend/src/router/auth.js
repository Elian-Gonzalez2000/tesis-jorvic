const router = require("express").Router();
const { signin } = require("../controller/auth.js");

router.post("/signin", signin);

module.exports = router;
