const routes = require("express").Router();
const auth = require("./auth");
const activities = require("./activities");
const adminAuth = require("./admin/adminAuth");

routes.use("/api", adminAuth);
routes.use("/api", auth);
routes.use("/api", activities);

routes.use((_req, res) => res.status(404).json("Not found"));
module.exports = { routes };
