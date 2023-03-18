const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Knowledge = new Schema({
  full_name: { type: String },
});

module.exports = mongoose.model("knowledges", Knowledge);
