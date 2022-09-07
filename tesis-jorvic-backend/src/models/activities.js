const { sequelize } = require("../index.js");
const { DataTypes } = require("sequelize");

const ActivityModel = sequelize.define(
   "Activity",
   {
      name: {
         type: DataTypes.STRING,
         allowNull: false,
         min: 3,
         max: 20,
      },
      date: {
         type: DataTypes.STRING,
         allowNull: false,
         min: 3,
         max: 20,
      },
      area: {
         type: DataTypes.ENUM("Cultura", "CRA", "Manos a la siembra", "CNAE"),
         allowNull: false,
      },
      evidence: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      description: {
         type: DataTypes.TEXT,
         allowNull: false,
      },
   },
   { timestamps: false }
);

module.exports = { ActivityModel };
