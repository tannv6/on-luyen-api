const express = require("express");
const {
  getAllKnowledge,
  createNewKnowledge,
} = require("../services/knowledgeService");

let router = express.Router();

const initKnowledgeRoutes = (app) => {
  router.get("/knowledge", getAllKnowledge);
  router.post("/create", createNewKnowledge);
  return app.use("/", router);
};

module.exports = { initKnowledgeRoutes };
