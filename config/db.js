const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURL");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exist(1);
  }
};

module.exports = connectDB;
