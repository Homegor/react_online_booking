const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: { type: String, enum: ["user", "admin"] },
    sex: {
      type: String,
      enum: ["мужской", "женский"],
    },
    lastServiceType: {
      type: Schema.Types.ObjectId,
      ref: "Services",
    },
    name: String,
    password: String,
    image: String,
    phone: String,
    lastVisitDate: Date, // или Number
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", schema);