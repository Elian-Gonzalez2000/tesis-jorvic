const router = require("express").Router();
const {
   signin,
   signup,
   getUserByName,
   editUserByEmail,
   deleteUserByEmail,
} = require("../../controller/admin/auth");
const { getAllUsers } = require("../../controller/admin/auth.js");

router.get("/admin/getallusers", getAllUsers);
router.get("/admin/user/:useremail", getUserByName);
router.post("/admin/signin", signin);
router.post("/admin/signup", signup);
router.put("/admin/edituser/:useremail", editUserByEmail);
router.delete("/admin/user/:useremail", deleteUserByEmail);

module.exports = router;
