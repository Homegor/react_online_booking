const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: { type: String },
    phone: { type: String },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    masters: { type: String },
    services: { type: String },
    visitDate: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Booking", schema);
