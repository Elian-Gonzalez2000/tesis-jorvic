const { sequelize } = require("../index.js");
const { DataTypes } = require("sequelize");

const TimelineModel = sequelize.define(
   "Timeline",
   {
      days: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      content: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      activities: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      estrategy: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      resource: {
         type: DataTypes.STRING,
         allowNull: false,
      },

      observations: {
         type: DataTypes.TEXT,
         allowNull: false,
      },

      dates: {
         type: DataTypes.TEXT,
         allowNull: false,
      },
   },
   { timestamps: false }
);

module.exports = { TimelineModel };
