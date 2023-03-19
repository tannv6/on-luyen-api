const mongoose = require("mongoose");

// const db="mongodb://localhost:27017/selfReview";
const db =
  "mongodb+srv://tannv6:Nguyentan97@firstcluster.t4fasqh.mongodb.net/selfReview?retryWrites=true&w=majority";

const connect = async () => {
  try {
    await mongoose.connect(db);
    console.log("Connect to DB successful");
  } catch {
    console.log("Fail to connect DB");
  }
};

module.exports = { connect };
