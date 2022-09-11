const { AuthModel } = require("../db/models/auth");

exports.signin = async (req, res) => {
   try {
      const { email, password, role } = req.body;

      if (!email.trim()) {
         return res
            .status(406)
            .json({ message: "El correo electronico no puede ser vacío" });
      }

      if (!password.trim()) {
         return res
            .status(406)
            .json({ message: "La contraseña no puede ser vacío" });
      }
      if (role === "admin") {
         return res
            .status(406)
            .json({ message: "Esta cuenta no es un usuario" });
      }

      const user = await AuthModel.findAll({
         where: {
            email: email,
            hash_password: password,
            role: role,
         },
      });
      if (user.length > 0) {
         //console.log("Usuario ", user[0].dataValues);
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
            role: role,
         },
      });
      if (user.length > 0) {
         console.log(user);
         return res.status(400).json({
            message: "User already registered",
         });
      }

      if (!firstName.trim()) {
         return res
            .status(406)
            .json({ message: "El nombre no puede ser vacío" });
      }
      if (!lastName.trim()) {
         return res
            .status(406)
            .json({ message: "El apellido no puede ser vacío" });
      }
      if (!identificationCard.trim()) {
         return res.status(406).json({
            message: "El numero de identificacion no puede ser vacío",
         });
      }
      if (!username.trim()) {
         return res
            .status(406)
            .json({ message: "El nombre de usuario no puede ser vacío" });
      }
      if (!email.trim()) {
         return res
            .status(406)
            .json({ message: "El correo electronico no puede ser vacío" });
      }
      if (!password.trim()) {
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
         res.json({ message: "Usuario creado correctamente", data: newUser });
      }
   } catch (error) {
      console.log(error);
      res.status(400).json({
         message: "Algo salio mal",
         data: error,
      });
   }
};
