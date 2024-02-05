const mongose = require("mongoose");
const { Schema, model } = mongose;

const UserSchema = new Schema(
     {
          authType: {
               type: String,
               enum: ["Admin", "Student", "Emp"],
               default: "Student"
          },
          regNo: {
               type: String,
               required: true,
               unique: true
          },
          emailID: {
               type: String,
               required: true,
               unique: true,
          },
          mobile: {
               type: Number,
               required: true,
          },
          password: {
               type: String,
               required: true,
          }
     },

     {
          timestamps: true
     }
)

const User = model("User", UserSchema)
module.exports = User;
