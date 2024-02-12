const mongoose = require("mongoose");
const { schemaOptions } = require("./modelOptions");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    role: {
      type: [
        {
          type: String,
          enum: ["user", "admin"],
          default: ["user"],
        },
      ],
    },
  },
  schemaOptions
);

module.exports = mongoose.model("User", userSchema);
