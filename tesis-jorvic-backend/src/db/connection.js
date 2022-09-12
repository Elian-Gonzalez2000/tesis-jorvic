const { Sequelize } = require("sequelize");
const {
   DATABASE,
   DB_USER,
   DB_PASSWORD,
   DB_HOST,
   DB_PORT,
} = require("../../config.js");

const sequelize = new Sequelize(`tesis-jorvic`, `${DB_USER}`, "", {
   logging: false,
   native: false,
   host: "localhost",
   dialect: "mysql",
});

module.exports = { sequelize };
