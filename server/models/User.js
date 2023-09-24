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
    birthdate: String,
    image: String,
    phone: Number,
    lastVisitDate: String,
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", schema);
