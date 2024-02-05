const mongose = require("mongoose");
const { Schema, model } = mongose;

const gallarySchema = new Schema(
     {
          imageName: {
               type: String
          },
          imageType: {
               type: String
          },
          image: {
               type: String
          }
     },

     {
          timestamps: true
     }
)

const gallary = model("gallary", gallarySchema)
module.exports = gallary;
