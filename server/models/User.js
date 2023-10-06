const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: { type: String },
    password: { type: String },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: { type: String, enum: ["user", "admin", "master"] },
    image: { type: String },
    phone: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", schema);
