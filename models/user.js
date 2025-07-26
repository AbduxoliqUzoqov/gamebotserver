const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  kanal: {
    type: Boolean,
    default: false
  },
  balans: {
    type: Number,
    default: 5
  },
  ref: {
    type: String,
    default: null
  },
  user_id: {
    type: String,
    required: true,
    unique: true
  }
});



const User = mongoose.model("User", userSchema);

module.exports = User;