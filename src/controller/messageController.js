const express = require("express");
const {
  getAllMessage,
  createNewMessage,
} = require("../services/messageService");

let router = express.Router();

const initMessageRoutes = (app) => {
  router.get("/", getAllMessage);
  router.post("/create", createNewMessage);
  //   router.delete("/delete/:id", deleteKnowledge);
  return app.use("/messages", router);
};

module.exports = { initMessageRoutes };
