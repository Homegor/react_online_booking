const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    categoriesId: { type: Schema.Types.ObjectId, ref: "Categories" },
    name: { type: String },
  },
  {
    timestamps: { createdAt: "created_at" },
  }
);

module.exports = model("Services", schema);
