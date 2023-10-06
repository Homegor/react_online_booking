const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: { type: String },
    phone: { type: Number },
    servicesId: { type: String || null },
    visitDateId: { type: Date },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Booking", schema);
