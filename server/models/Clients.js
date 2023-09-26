const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    sex: {
      type: String,
      enum: ["male", "female"],
    },
    name: String,
    password: String,
    image: String,
    phone: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Clients", schema);
