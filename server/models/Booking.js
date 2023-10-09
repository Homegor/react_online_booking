const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: { type: String },
    phone: { type: String },
    mastersId: { type: Schema.Types.ObjectId, ref: "Masters" },
    servicesId: { type: String || null },
    visitDateId: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Booking", schema);
