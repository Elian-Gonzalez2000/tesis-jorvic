const { sequelize } = require("../connection");
const { DataTypes } = require("sequelize");

const ActivitiesModel = sequelize.define(
   "Activities",
   {
      name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      date: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      description: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      images: {
         type: DataTypes.STRING,
         allowNull: true,
      },
      createdByUser: { type: DataTypes.STRING, allowNull: true },
   },
   { timestamps: false }
);

module.exports = { ActivitiesModel };
