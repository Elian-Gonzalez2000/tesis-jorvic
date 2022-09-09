const { ActivitiesModel } = require("../db/models/activities");

exports.activities = (req, res) => {
   const { name, date, description, image } = req.body;
   res.status(200).json({ msg: "desde ruta activities" });
};
