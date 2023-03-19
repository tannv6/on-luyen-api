const express = require("express");
const { login } = require("../services/accountService");

let router = express.Router();

const initAccountRoutes = (app) => {
  router.post("/", login);
  return app.use("/login", router);
};

module.exports = { initAccountRoutes };
