const bcrypt = require('bcrypt');
const Professor = require('../Models/professor.model');
const user = require("../Models/users.model");

const createProfessor = async (req, res) => {
     try {
          const { userID, profData } = req.body;

          const newProfesser = new Professor(profData);
          
          if (!userID) {
               return res.status(404).json({
                    status: 404,
                    message: 'user id is not get in body',
               });
          }
          const users = await user.findById(userID);

          if (users) {
               const savedProfesser = await newProfesser.save();

               

               if (!users) {
                    return res.status(404).json({
                         status: 404,
                         message: 'professor not found',
                    });
               }

               savedProfesser.userID = userID;
               const updatedProfessor = await savedProfesser.save();

               if (updatedProfessor) {
                    res.status(201).json({
                         status: 201,
                         message: 'Professer Addmission successfully',
                         data: updatedProfessor,
                    });
               }
               else {
                    return res.status(404).json({
                         status: 404,
                         message: 'Professer add error'
                    });
               }
          }

     } catch (error) {
          // Handle unexpected errors
          console.error('Error creating user:', error);
          res.status(500).json({
               status: 500,
               error: 'Internal Server Error',
          });
     }
};

const getAllProfessors = async (req, res) => {
     try {
          const professors = await Professor.find().populate("userID");
          res.json({
               status: 200,
               message: "success",
               data: professors,
          });
     } catch (error) {
          res.status(500).json({
               status: 500,
               error: error.message,
          });
     }
};

const getProfessorById = async (req, res) => {
     try {
          const ProfessorId = req.body.id;
          const getprofessor = await Professor.findById(ProfessorId).populate("userID");

          if (!getprofessor) {
               return res.status(404).json({
                    status: 404,
                    message: 'User not found',
               });
          }

          res.json({
               status: 200,
               data: getprofessor,
          });
     } catch (error) {
          res.status(500).json({
               status: 500,
               error: error.message,
          });
     }
};

const updateProfessorById = async (req, res) => {
     try {
          const ProfessorId = req.body.id;
          const updatedProfessor = await Professor.findByIdAndUpdate(ProfessorId, req.body, {
               new: true,
          }).populate("userID");

          if (!updatedProfessor) {
               return res.status(404).json({
                    status: 404,
                    message: 'sorry professor not found',
               });
          }

          res.json({
               status: 200,
               message: 'Professor is update successfully',
               data: updatedProfessor,
          });
     } catch (error) {
          res.status(500).json({
               status: 500,
               error: error.message,
          });
     }
};

const deleteProfessorById = async (req, res) => {
     try {
          const ProfessorId = req.body.id;
          const deletedProfessor = await Professor.findByIdAndDelete(ProfessorId).populate("userID");

          if (!deletedProfessor) {
               return res.status(404).json({
                    status: 404,
                    message: 'Professor not found',
               });
          }

          res.json({
               status: 200,
               message: 'Professor deleted successfully',
               data: deletedProfessor,
          });

          // res.clearCookie(StudentAdmission);//////////////////////////////////////

     } catch (error) {
          res.status(500).json({
               status: 500,
               error: error.message,
          });
     }
};

module.exports = {
     createProfessor,
     getAllProfessors,
     getProfessorById,
     updateProfessorById,
     deleteProfessorById,
};
