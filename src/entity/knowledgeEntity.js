const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Knowledge = new Schema({
  knowledge_name: { type: String },
  answer: { type: String },
});

module.exports = mongoose.model("knowledges", Knowledge);
