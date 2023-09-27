const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: String,
    image: String,
    experience: Number,
    birthdate: String,
    categoriesId: { type: Schema.Types.ObjectId, ref: "Categories" },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Masters", schema);
