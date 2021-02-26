const mongoose = require("mongoose");
const { Schema } = mongoose;
const findOrCreate = require("mongoose-findorcreate");

const userSchema = new Schema({
  googleId: String,
  name: String, // String is shorthand for {type: String}
  date: { type: Date, default: Date.now },
  userType: { type: String, default: "user" },
  image: String,
  isVerified: { type: Boolean, default: false },
});

userSchema.plugin(findOrCreate);
module.exports = mongoose.model("user", userSchema);
