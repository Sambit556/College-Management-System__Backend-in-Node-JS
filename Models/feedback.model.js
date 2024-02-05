const mongose = require("mongoose");
const { Schema, model } = mongose;

const feedbackSchema = new Schema(
     {
    
       userName:{
          type: String,
          required: true
       },
       email:{
          type: String,
          required: true,
          unique: true
       },
       raitings:{
         type: Number,
         required: true,
       },
       opinion:{
          type: String,
          required: true
       }    
     },

     {
          timestamps: true
     }
)

const Feedback = model("feedback", feedbackSchema)
module.exports = Feedback;
