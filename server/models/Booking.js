const { Schema, model, SchemaTypes } = require("mongoose");

const schema = new Schema(
  {
    serviceId: { type: SchemaTypes.ObjectId, ref: "Masters" },
    masterId: { type: SchemaTypes.ObjectId, ref: "Categories" },
    visitDate: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Booking", schema);
