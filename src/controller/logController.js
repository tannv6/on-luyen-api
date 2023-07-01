const express = require("express");
const {
    log, getAllLogs
} = require("../services/logService");

let router = express.Router();

const initLogRoutes = (app) => {
    router.post("/", log);
    router.get("/", getAllLogs);
    return app.use("/logs", router);
};

module.exports = { initLogRoutes };
