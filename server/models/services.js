const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    id: String,
    name: String,
    categoriesId: { type: Schema.Types.ObjectId, ref: "Categories" },
  },
  {
    timestamps: { createdAt: "created_at" },
  }
);

module.exports = model("Services", schema);
