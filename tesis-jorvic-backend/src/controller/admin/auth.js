const { AuthModel } = require("../../db/models/auth");

exports.getAllUsers = async (req, res) => {
   try {
      const users = await AuthModel.findAll();
      if (users) {
         //console.log(activities);
         res.status(200).json(users);
      }
   } catch (error) {
      console.log(error);
      res.status(400).json({
         message: "Algo salio mal",
         data: error,
      });
   }
};

exports.getUserByName = async (req, res) => {
   const { useremail } = req.params;
   try {
      const user = await AuthModel.findAll({
         where: {
            email: email,
         },
      });
      if (user && user.length === 0) {
         //console.log(activities);
         res.status(400).json({
            message: "No se encontro el usuario " + email,
         });
      }
      if (user) {
         //console.log(activities);
         res.status(200).json(user);
      }
   } catch (error) {
      console.log(error);
      res.status(400).json({
         message: "Algo salio mal",
         data: error,
      });
   }
};

exports.signin = async (req, res) => {
   try {
      const { email, password, role } = req.body;
      console.log(email, password);

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
      if (role === "user") {
         return res.status(406).json({ message: "Esta cuenta no es admin" });
      }

      const user = await AuthModel.findAll({
         where: {
            email: email,
            hash_password: password,
            role: role,
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
      return res.status(400).json({
         message: "Algo salio mal",
         data: error,
      });
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
      /* console.log({
         firstName,
         lastName,
         identificationCard,
         username,
         email,
         password,
         role,
      }); */

      const user = await AuthModel.findAll({
         where: {
            email: email,
            role: role,
         },
      });
      if (user.length > 0) {
         //console.log(user);
         return res.status(400).json({
            message: "Admin already registered",
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

exports.getUserByName = async (req, res) => {
   const { useremail } = req.params;
   try {
      const user = await AuthModel.findAll({
         where: {
            email: useremail,
         },
      });
      if (user && user.length === 0) {
         //console.log(activities);
         return res.status(400).json({
            message: "No se encontro el usuario " + email,
         });
      }
      if (user) {
         //console.log(activities);
         return res.status(200).json(user);
      }
   } catch (error) {
      console.log(error);
      return res.status(400).json({
         message: "Algo salio mal",
         data: error,
      });
   }
};

exports.editUserByEmail = async (req, res) => {
   const { useremail } = req.params;
   const {
      firstName,
      lastName,
      identificationCard,
      username,
      email,
      password,
      role,
   } = req.body;
   try {
      const userUpdated = await AuthModel.update(
         {
            firstName,
            lastName,
            identificationCard,
            username,
            email,
            hash_password: password,
            role,
         },
         {
            where: { email: useremail },
         }
      );
      if (userUpdated) {
         //console.log(activities);
         return res.status(200).json(userUpdated);
      }
      if (userUpdated && userUpdated.length === 0) {
         //console.log(activities);
         return res.status(400).json({
            message: "No se encontro el usuario " + useremail,
         });
      }
   } catch (error) {
      console.log(error);
      return res.status(400).json({
         message: "Algo salio mal",
         data: error,
      });
   }
};

exports.deleteUserByEmail = async (req, res) => {
   const { useremail } = req.params;

   try {
      const userDelete = await AuthModel.destroy({
         where: { email: useremail },
      });
      if (userDelete) {
         //console.log(activities);
         return res
            .status(200)
            .json({ message: "Usuario borrado", delete: userDelete });
      }
      if (!userDelete) {
         //console.log(activities);
         return res.status(400).json({
            message: "No se encontro el usuario " + useremail,
         });
      }
   } catch (error) {
      console.log(error);
      return res.status(400).json({
         message: "Algo salio mal",
         data: error,
      });
   }
};
