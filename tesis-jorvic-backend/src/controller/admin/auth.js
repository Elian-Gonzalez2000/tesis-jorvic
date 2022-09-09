const { AuthModel } = require("../../db/models/auth");

exports.signin = async (req, res) => {
   try {
      const { email, password, role } = req.body;

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
      if (role === "user") {
         return res.status(406).json({ message: "Esta cuenta no es admin" });
      }

      const user = await AuthModel.findAll({
         where: {
            email: email,
            hash_password: password,
         },
      });
      if (user.length > 0) {
         console.log("Usuario ", user[0].dataValues);
         const {
            firstName,
            lastName,
            username,
            identificationCard,
            email,
            role,
         } = user[0].dataValues;
         res.status(200).json({
            user: {
               firstName,
               lastName,
               username,
               identificationCard,
               email,
               role,
            },
         });
      } else {
         return res.status(400).json({ message: "Algo fue mal" });
      }

      console.log(user);
   } catch (error) {
      console.log(error);
   }
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

      const user = await AuthModel.findAll({
         where: {
            email: email,
         },
      });
      if (user.length > 0) {
         console.log(user);
         return res.status(400).json({
            message: "Admin already registered",
         });
      }

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
            .json({ message: "La contraseña no puede estar vacía" });
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

exports;