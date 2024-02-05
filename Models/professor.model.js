const mongose = require("mongoose");
const { Schema, model } = mongose;

const professorSchema = new Schema(
     {
          profFirstName: {
               type: String,
               required: true
          },
          profMiddleName: {
               type: String,
               required: true
          },
          profLastName: {
               type: String,
               required: true
          },
          profGender: {
               type: String,
               required: true
          },
          profDOB: {
               type: String,
               required: true
          },
          profDateOfJoining: {
               type: String,
               required: true
          },
          profCity: {
               type: String,
               required: true
          },
          profPost: {
               type: String,
               required: true
          },
          profDist: {
               type: String,
               required: true
          },
          profState: {
               type: String,
               required: true
          },
          profCountry: {
               type: String,
               required: true
          },
          profPin: {
               type: Number,
               required: true
          },
          profAddress: {
               type: String,
               required: true
          },
          profAltMobile: {
               type: Number,
               required: true
          },
          profEducation: {
               type: String,
               required: true
          },
          profQualification: {
               type: String,
               required: true
          },
          profPosition: {
               type: String,
               required: true
          },
          profSalary: {
               type: Number,
               required: true
          },
          acceptance:{
               type:Boolean,
               required: true
          },
          status:{
               type: String,
               enum: ["Pending", "Reject", "Accept"],
               required: true
          },
          userID: {
               type: Schema.Types.ObjectId,
               ref: "User"
          }
     },

     {
          timestamps: true
     }
)

const professor = model("professordb", professorSchema)
module.exports = professor;
