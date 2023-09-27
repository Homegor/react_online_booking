const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: String,
    image: String,
    experience: Number,
    birthdate: String,
    categories: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Masters", schema);
