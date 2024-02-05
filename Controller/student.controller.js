const Student = require("../Models/students.model");
const User = require("../Models/users.model");

const getAllcourses = async (req, res) => {
     try {
          const courses = await Student.find({ stdCourse: req.body.stdCourse }).populate("userID");

          if (!courses) {
               res.json({
                    status: 400,
                    message: "No student are Enrolled in the course "
               });
          }
          res.json({
               status: 200,
               message: "success",
               data: courses,
          });
     } catch (error) {
          res.status(500).json({
               status: 500,
               error: error.message,
          })
     }
}

const AddAdmission = async (req, res) => {
     try {
          const { userID, studentData } = req.body;


          const newStudent = new Student(studentData);

          if (!userID) {
               return res.status(404).json({
                    status: 404,
                    message: 'user id is not get in body',
               });
          }

          // Save the user to the database
          const user = await User.findById(userID);


          if (user) {
               const savedStudent = await newStudent.save();

               if (!user) {
                    return res.status(404).json({
                         status: 404,
                         message: 'user not found',
                    });
               }

               // Update student document with admission details////////////////////////////////////////////////
               savedStudent.userID = userID;
               const updatedStudent = await savedStudent.save();

               if (updatedStudent) {
                    res.status(201).json({
                         status: 201,
                         message: 'Student Addmission successfully',
                         data: updatedStudent,
                    });
               }
               else {
                    return res.status(404).json({
                         status: 404,
                         message: 'student update error'
                    });
               }
          }

     }
     catch (error) {
          console.error('Error creating user:', error);
          res.status(500).json({
               status: 500,
               error: 'Internal Server Error',
          });
     }
}

const getAllStudents = async (req, res) => {
     try {
          const students = await Student.find().populate("userID");

          res.json({
               status: 200,
               message: "success",
               data: students,
          });
     } catch (error) {
          res.status(500).json({
               status: 500,
               error: error.message,
          });
     }
};

const getStudentById = async (req, res) => {
     try {
          const studentId = req.body.id;
          const student = await Student.findById(studentId).populate("userID");

          if (!student) {
               return res.status(404).json({
                    status: 404,
                    message: 'User not found',
               });
          }

          res.json({
               status: 200,
               data: student,
          });
     } catch (error) {
          res.status(500).json({
               status: 500,
               error: error.message,
          });
     }
};

const updateStudentById = async (req, res) => {
     try {
          const studentId = req.body.id;
          const updatedstudent = await Student.findByIdAndUpdate(studentId, req.body, {
               new: true,
          });

          if (!updatedstudent) {
               return res.status(404).json({
                    status: 404,
                    message: 'sorry student not found',
               });
          }

          res.json({
               status: 200,
               message: 'User updated successfully',
               data: updatedstudent,
          });
     } catch (error) {
          res.status(500).json({
               status: 500,
               error: error.message,
          });
     }
};

// const deleteStudentById = async (req, res) => {
//      try {
//           const studentId = req.body.id;
//           const deletedstudent = await Student.findByIdAndDelete(studentId);

//           if (!deletedstudent) {
//                return res.status(404).json({
//                     status: 404,
//                     message: 'student not found',
//                });
//           }

//           res.json({
//                status: 200,
//                message: 'student deleted successfully',
//                data: deletedstudent,
//           });

//           // res.clearCookie(StudentAdmission);//////////////////////////////////////

//      } catch (error) {
//           res.status(500).json({
//                status: 500,
//                error: error.message,
//           });
//      }
// };

module.exports = {
     AddAdmission,
     getAllStudents,
     getStudentById,
     updateStudentById,
     getAllcourses
     // deleteStudentById,
};