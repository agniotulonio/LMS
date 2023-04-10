const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    year: { type: String },
    genre: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", BookSchema);
