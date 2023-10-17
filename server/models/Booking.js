const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: { type: String },
    phone: { type: String },
    mastersId: { type: String || null },
    servicesId: { type: String || null },
    visitDateId: { type: String || null },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Booking", schema);
