const User = require('../Models/users.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require("dotenv").config();

const createUser = async (req, res) => {
     try {
          const { authType, regNo, emailID, mobile, password } = req.body;

          if (!authType || !['Admin', 'Student', 'Emp'].includes(authType)) {
               return res.status(400).json({
                    status: 400,
                    error: 'Invalid authType. Must be one of: Admin, Student, Emp.',
               });
          }

          if (!emailID || !mobile || !password || !regNo || !authType) {
               return res.status(400).json({
                    status: 400,
                    error: 'All fields (email, phone, password) are required.',
               });
          }

          // Check if the email is already taken
          const existingUser = await User.findOne({ emailID });
          if (existingUser) {
               return res.status(400).json({
                    status: 400,
                    error: 'Email is already exist.',
               });
          }

          // Hash the password
          const hashedPassword = await bcrypt.hash(password, 10);

          // const photo = req.files.image;
          // const imageBuffer = photo.data;
          // Create a new user with the hashed password
          const newUser = new User({
               authType,
               regNo,
               emailID,
               mobile,
               password: hashedPassword,
          });

          // Save the user to the database
          const savedUser = await newUser.save();

          // Return the response
          res.status(201).json({
               status: 201,
               message: 'User Create successfully',
               data: savedUser,
          });
     } catch (error) { 
          // Handle unexpected errors
          console.error('Error creating user:', error);
          res.status(500).json({
               status: 500,
               error: 'Internal Server Error',
          });
     }
};

const login = async (req, res) => {
     try {
          const { emailID, password } = req.body;

          // Validate request body
          if (!emailID || !password) {
               return res.status(400).json({
                    status: 400,
                    error: 'Email and password are required fields.',
               });
          }

          // Find the user by email
          const user = await User.findOne({ emailID });

          // Check if the user exists
          if (!user) {
               return res.status(401).json({
                    status: 401,
                    error: 'Invalid credentials. user not found.',
               });
          }

          // Validate the password
          const isPasswordValid = await bcrypt.compare(password, user.password);

          if (!isPasswordValid) {
               return res.status(401).json({
                    status: 401,
                    error: 'Invalid credentials. Password is incorrect.',
               });
          }

          // Generate JWT token
          const token = jwt.sign(
               { userId: user._id, email: user.emailID },
               process.env.JWT_SECRET,
               { expiresIn: '8h' } // You can adjust the expiration time
          );

          res.json({
               status: 200,
               message: 'Login successful',
               token,
               user
          });

     } catch (error) {
          res.status(500).json({
               status: 500,
               error: error.message,
          });
     }
};


const getUserById = async (req, res) => {
     try {
          const userId = req.body.id;
          const user = await User.findById(userId);

          if (!user) {
               return res.status(404).json({
                    status: 404,
                    message: 'User not found',
               });
          }

          res.json({
               status: 200,
               data: user,
          });
     } catch (error) {
          res.status(500).json({
               status: 500,
               error: error.message,
          });
     }
};

const Logout = async (req, res) => {
     try {
          const exist_token = req.body.token;
          const userId = req.body.userId;
          const email = req.body.email;
          // const exist_token = req.body(User.userId, User.email, token);

          if (!exist_token) {                                                   // clear the cookies in logout
               return res.status(401).json({ message: " Please login 🐳🐼" });
          }

          // res.clearCookie('exist_token', { path: '' });  //////////////////////////////////work in progress.....................................................................................................................................................................................................................
          res.status(200).json({ message: "Logout ok 🤧 🎏 ⌛" })

     } catch (error) {
          res.status(500).json({ message: 'not logout 🥺', error: error.message });
          console.error('Logout error:😶‍🌫️', error);
     }
}

module.exports = {
     login,
     createUser,
     getUserById,
     Logout
};
