const express = require("express");
const {
  getAllKnowledge,
  createNewKnowledge,
  deleteKnowledge,
  updateKnowledge,
} = require("../services/knowledgeService");

let router = express.Router();

const initKnowledgeRoutes = (app) => {
  router.get("/", (req, res) =>
    res.status(200).json("SERVER IS ON 19.03.2023")
  );
  router.get("/test", (req, res) => {
    return res.status(200).json({
      data: [{ knowledge_name: "Tan", answer: "Love Minh" }],
      status: "success",
    });
  });
  router.get("/knowledge", getAllKnowledge);
  router.post("/create", createNewKnowledge);
  router.put("/update", updateKnowledge);
  router.delete("/delete/:id", deleteKnowledge);
  return app.use("/", router);
};

module.exports = { initKnowledgeRoutes };
