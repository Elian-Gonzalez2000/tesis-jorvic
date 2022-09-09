const express = require("express");
const { Sequelize } = require("sequelize");
const env = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const router = require("express").Router();
const authRoutes = require("./router/auth.js");
const adminRoutes = require("./router/admin/auth.js");
const activitiesRoutes = require("./router/activities.js");
const app = express();

env.config();

// destructuring environment variables
const { DB_PORT, DB_HOST, DB_PASSWORD, DB_USER, PORT } = process.env;

// Sequelize connection
const sequelize = new Sequelize(`tesis-jorvic`, `${DB_USER}`, "", {
   host: "localhost",
   dialect: "postgres",
})
   .authenticate()
   .then(() => {
      console.log("Database Connected");
   })
   .catch((err) => {
      console.error("Unable to connect to the database:", err);
   });

app.use(express.json()); // Acept format JSON in requests
app.use(morgan("dev")); // Log info
app.use(
   cors({
      origin: "*",
      credentials: true,
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-Type", "Authorization"],
   })
); //Allow everyone to share resources
app.use("/api", authRoutes);
app.use("/api", adminRoutes);
app.use("/api", activitiesRoutes);

app.get("/", (req, res) => {
   return res.status(200).json({
      message: "hello from server",
   });
});

router.use((_req, res) => res.status(404).json("Not found"));

app.listen(PORT || 3002, () => {
   console.log(`Server is running on PORT ${PORT || 3002}`);
});
module.exports = { app, sequelize };
