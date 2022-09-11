const { ActivitiesModel } = require("../db/models/activities");

exports.createActivities = async (req, res) => {
   try {
      const { name, date, description, createdByUser } = req.body;

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
         createdByUser: createdByUser ? createdByUser : null,
         images: stringProductPictures,
      });
      //console.log(activities);
      res.status(201).json({
         message: "Actividad creada satisfactoriamente",
         data: [activities],
      });
   } catch (error) {
      console.log(error);
      return res.status(400).json({ error });
   }
};

exports.getActivitiesBySlug = async (req, res) => {
   try {
      const { slug } = req.params;
   } catch (error) {
      console.log(error);
      return res.status(400).json({ error });
   }
};

exports.getAllActivities = async (req, res) => {
   try {
      const activities = await ActivitiesModel.findAll();
      if (activities) {
         //console.log(activities);
         res.status(201).json(activities);
      }
   } catch (error) {
      console.log(error);
      return res.status(400).json({ error });
   }
};
