const mongoose = require("mongoose");
const { Schema } = mongoose;

const chatSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  message: String,
  date: { type: String, default: Date.now },
  createdAt: { type: Date, expires: "1200m", default: Date.now },
  userType: { type: String, default: "user" },
  userImage: String,
  wroteBy: String,
});

module.exports = mongoose.model("chat", chatSchema);
