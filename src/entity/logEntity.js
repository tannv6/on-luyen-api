const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LogEntity = new Schema({
    type: { type: String },
    time: { type: String },
    ip: { type: String },
    deviceWidth: { type: String },
    deviceHeight: { type: String },
});

module.exports = mongoose.model("logs", LogEntity);
