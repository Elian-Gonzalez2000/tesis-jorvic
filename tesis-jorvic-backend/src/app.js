const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { routes } = require("./routes/index.js");
const app = express();

app.use(express.json()); // Acept format JSON in requests
app.use(morgan("dev")); // Log info
app.use(
   cors({
      origin: "*",
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
   })
); // Allow everyone to share resources
app.use(routes); // Routes

module.exports = { app };
