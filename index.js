const express = require("express");
const { connect } = require("./src/config/connectDB");
const { initKnowledgeRoutes } = require("./src/controller/knowledgeController");
const cors = require("cors");

const app = express();

connect();

app.use(
  cors({
    origin: "*",
  })
);

initKnowledgeRoutes(app);

app.listen(3001, function () {
  console.log("Example app listening on port 3001!");
});
