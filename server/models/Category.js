const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: { type: String },
    images: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Categories", schema);
