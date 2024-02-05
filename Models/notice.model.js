const mongose = require("mongoose");
const { Schema, model } = mongose;

const NoticeSchema = new Schema(
     {
          noticeTittle: {
               type: String
          },
          noticsDate: {
               type: String
          },
          noticesDesc: {
               type: String
          }
     },

     {
          timestamps: true
     }
)

const Notice = model("Notices", NoticeSchema)
module.exports = Notice;
