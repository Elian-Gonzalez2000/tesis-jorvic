const User = require("../models/auth.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const shortid = require("shortid");

exports.signin = (req, res) => {
   User.findOne({ email: req.body.email }).exec(async (error, user) => {
      if (user)
         return res.status(400).json({
            message: "Admin already registered",
         });

      const { firstName, lastName, email, password } = req.body;
      const hash_password = bcrypt.hash(password, 10);
      const _user = new User({
         firstName,
         lastName,
         email,
         hash_password,
         username: shortid.generate(),
         role: "admin",
      });

      _user.save((error, data) => {
         if (error) {
            return res.status(400).json({
               message: "Something went wrong ",
               error: error,
            });
         }

         if (data) {
            return res.status(201).json({
               message: "Admin created  successfuly",
            });
         }
      });
   });
};
exports.signup = (req, res) => {
   res.status(200).json("nice");
};
