const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Message = new Schema({
  user: { type: String },
  content: { type: String },
});

module.exports = mongoose.model("messages", Message);
