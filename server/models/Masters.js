const { Schema, model, SchemaTypes } = require("mongoose");

const schema = new Schema(
  {
    name: String,
    service: { type: SchemaTypes.ObjectId, ref: "Masters" },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Booking", schema);
