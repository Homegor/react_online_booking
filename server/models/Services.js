const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: { type: String },
    prise: { type: Number },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Services", schema);
