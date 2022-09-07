const User = require("../../models/auth.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const shortid = require("shortid");

exports.signin = async (req, res) => {
   res.status(200).json("nice");
};
exports.signup = async (req, res) => {
   try {
      const {
         firstName,
         lastName,
         identificationCard,
         username,
         email,
         password,
         role,
      } = req.body;

      if (!firstName) {
         return res
            .status(406)
            .json({ message: "El nombre no puede ser vacío" });
      }
      if (!lastName) {
         return res
            .status(406)
            .json({ message: "El apellido no puede ser vacío" });
      }
      if (!identificationCard) {
         return res.status(406).json({
            message: "El numero de identificacion no puede ser vacío",
         });
      }
      if (!username) {
         return res
            .status(406)
            .json({ message: "El nombre de usuario no puede ser vacío" });
      }
      if (!email) {
         return res
            .status(406)
            .json({ message: "El correo electronico no puede ser vacío" });
      }
      if (!password) {
         return res
            .status(406)
            .json({ message: "La contraseña no puede ser vacío" });
      }
      const userData = {
         firstName,
         lastName,
         identificationCard,
         username,
         email,
         password,
         role,
      };
      let newUser = await User.create(userData);
      if (newUser) {
         res.json({ message: "actor creado correctamente", data: newUser });
      }
   } catch (error) {
      console.log(error);
   }
};
