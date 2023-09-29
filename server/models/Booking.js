const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: String,
    phone: Number,
    servicesId: String || null,
    visitDateId: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Booking", schema);
