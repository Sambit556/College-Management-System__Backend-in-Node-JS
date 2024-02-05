const mongose = require("mongoose");
const { Schema, model } = mongose;

const StudentSchema = new Schema(
     {
          studfirstName: {
               type: String,
               required: true
          },
          studMiddleName: {
               type: String,
          },
          studLastName: {
               type: String,
               required: true
          },
          stdCourse:{
               type: String,
               required: true
          },
          studGender: {
               type: String,
               required: true
          },
          studDOB: {
               type: Date,
               required: true
          },
          studCategory: {
               type: String,
               required: true,
          },
          studReligion: {
               type: String,
               required: true,
          },

          studFatherName: {
               type: String,
               required: true
          },
          studMotherName: {
               type: String,
               required: true
          },
          studCity: {
               type: String,
               required: true
          },
          studPost: {
               type: String,
               required: true
          },
          studDist: {
               type: String,
               required: true
          },
          studState: {
               type: String,
               required: true
          },
          studCountry: {
               type: String,
               required: true
          },
          studPin: {
               type: Number,
               required: true
          },
          studAlternativeMobile: {
               type: Number
          },
          studParentMobile: {
               type: Number,
               required: true
          },
          studAddress: {
               type: String,
               required: true
          },
          studEducation: {
               type: String,
               required: true
          },
          studPassYear: {
               type: Number,
               required: true
          },
          studStatus: {
               type: String,
               required: true
          },
          studCollegeFees: {
               type: Number,
               required: true
          },
          status: {
               type: String,
               enum:  ["Pending", "Reject", "Accept"],
               required: true
          },
          acceptance:{
               type:Boolean,
               required: true
          },
          userID: {
               type: Schema.Types.ObjectId,
               ref: "User"
          },
     },

     {
          timestamps: true
     }
)

const Student = model("Student", StudentSchema)
module.exports = Student;
