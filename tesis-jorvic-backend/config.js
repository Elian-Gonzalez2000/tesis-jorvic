const dotenv = require("dotenv").config();

const { DB_PORT, DB_HOST, DB_PASSWORD, DB_USER, PORT } = process.env;
module.exports = { DB_PORT, DB_HOST, DB_PASSWORD, DB_USER, PORT };
