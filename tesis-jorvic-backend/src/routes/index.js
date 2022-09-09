const routes = require("express").Router();
const auth = require("./auth");
const activities = require("./activities");
const adminAuth = require("./admin/auth");

routes.use("/api", auth);
routes.use("/api", activities);
routes.use("/api/admin", adminAuth);

routes.use((_req, res) => res.status(404).json("Not found"));
module.exports = { routes };
