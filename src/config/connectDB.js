const mongoose = require("mongoose");

// const db="mongodb://localhost:27017/selfReview";
const db =
  "mongodb+srv://tannv6:Nguyentan97@firstcluster.t4fasqh.mongodb.net/selfReview";

const connect = async () => {
  try {
    await mongoose.connect(db);
    console.log("connect successful");
  } catch {
    console.log("connect fail");
  }
};

module.exports = { connect };
