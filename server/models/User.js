const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    name: String,
    password: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: { type: String, enum: ["user", "admin", "master"] },
    image: String,
    phone: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", schema);
