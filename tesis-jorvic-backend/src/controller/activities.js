const { ActivitiesModel } = require("../db/models/activities");

exports.createActivities = async (req, res) => {
   try {
      const { name, date, description, createdByUser } = req.body;
      //console.log(name, date, description, createdByUser);

      if (!name.trim()) {
         return res
            .status(406)
            .json({ message: "El nombre no puede estar vacío" });
      }
      if (!date.trim()) {
         return res.status(406).json({ message: "Debe ingresar la fecha" });
      }
      if (!description.trim()) {
         return res
            .status(406)
            .json({ message: "Debe ingresar un descripcion de la actividad" });
      }

      let productPictures = [];

      if (req.files && req.files.length > 0) {
         productPictures = req.files.map((file) => {
            return { img: file.filename };
         });
      } else {
         return res
            .status(406)
            .json({ message: "Debe ingresar imagenes de las actividades" });
      }
      //console.log("product", productPictures);
      let stringProductPictures = "";
      productPictures.forEach((el) => {
         return (stringProductPictures = `${stringProductPictures};${el.img}`);
      });

      const activities = await ActivitiesModel.create({
         name,
         date,
         description,
         images: stringProductPictures,
         createdByUser: createdByUser ? createdByUser : null,
      });
      //console.log(activities);
      res.status(201).json({
         message: "Actividad creada satisfactoriamente",
         data: [activities],
      });
   } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Algo salio mal", error });
   }
};

exports.getActivitiesById = async (req, res) => {
   try {
      const { id } = req.params;
      const activity = await ActivitiesModel.findByPk(id);
      if (activity) {
         res.status(200).json(activity);
      }
   } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Algo salio mal", error });
   }
};

exports.getAllActivities = async (req, res) => {
   try {
      const activities = await ActivitiesModel.findAll();
      if (activities) {
         //console.log(activities);
         res.status(200).json(activities);
      }
   } catch (error) {
      console.log(error);
      return res.status(400).json({ error });
   }
};
