const { Schema, model } = require("mongoose")

const schema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String
    },
    birthdate: {
      type: String
    },
    image: {
      type: String
    },
    phone: {
      type: Number,
      required: true
    },
    sex: {
      type: String,
      enum: ["мужской", "женский"]
    },
    lastServiceType: {
      type: Schema.Types.ObjectId,
      ref: "Services"
    },
    lastVisitDate: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

module.exports = model("User", schema)
