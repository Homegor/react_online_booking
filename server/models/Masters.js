const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    avatars: { type: String },
    image: { type: String },
    experience: { type: Number },
    birthdate: { type: String },
    service: { type: String },
    phone: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Masters", schema);
