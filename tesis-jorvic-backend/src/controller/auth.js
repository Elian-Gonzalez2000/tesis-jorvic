const { AuthModel } = require("../db/models/auth");

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
         hash_password: password,
         role,
      };
      let newUser = await AuthModel.create(userData);
      if (newUser) {
         res.json({ message: "actor creado correctamente", data: newUser });
      }
   } catch (error) {
      console.log(error);
   }
};
