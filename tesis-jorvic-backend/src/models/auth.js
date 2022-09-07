const { db } = require("../app.js");
const { DataTypes } = require("sequelize");

const AuthModel = db.sequelize.define(
   "Auth",
   {
      firstName: {
         type: DataTypes.STRING,
         allowNull: false,
         min: 3,
         max: 20,
      },
      lastName: {
         type: DataTypes.STRING,
         allowNull: false,
         min: 3,
         max: 20,
      },
      identificationCard: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      username: {
         type: DataTypes.STRING,
         allowNull: false,
         isLowercase: true,
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         isLowercase: true,
      },
      hash_password: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      role: {
         type: DataTypes.ENUM("user", "admin"),
         default: "user",
      },
      contactNumber: { type: DataTypes.STRING },
   },
   { timestamps: false }
);

module.exports = { AuthModel };
