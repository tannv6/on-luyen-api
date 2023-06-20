const express = require("express");
const {
    log
} = require("../services/logService");

let router = express.Router();

const initLogRoutes = (app) => {
    router.post("/", log);
    return app.use("/logs", router);
};

module.exports = { initLogRoutes };
