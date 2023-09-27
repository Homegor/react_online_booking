const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    serviceId: { type: Schema.Types.ObjectId, ref: "Categories" },
    masterId: { type: Schema.Types.ObjectId, ref: "Masters" },
    visitDateId: Date,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Booking", schema);
