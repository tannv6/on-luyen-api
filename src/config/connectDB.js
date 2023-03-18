const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/selfReview");
    console.log("connect successful");
  } catch {
    console.log("connect fail");
  }
};

module.exports = { connect };
