const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: { type: String },
    categoriesId: { type: Schema.Types.ObjectId, ref: "Categories" },
  },
  {
    timestamps: { createdAt: "created_at" },
  }
);

module.exports = model("Services", schema);
