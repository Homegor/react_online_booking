const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    id: String,
    name: String,
    images: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Categories", schema);
