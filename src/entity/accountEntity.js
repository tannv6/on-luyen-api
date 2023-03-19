const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AccountEntity = new Schema({
  user_name: { type: String },
  pass: { type: String },
});

module.exports = mongoose.model("accounts", AccountEntity);
