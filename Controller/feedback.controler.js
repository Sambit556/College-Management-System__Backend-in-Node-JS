const Feedback = require("../Models/feedback.model");
const user = require("../Models/users.model");
const CreateFeedback = async (req, res) => {
     try {
          const { userID,feedbackDetails } = req.body;

          const newFeedback = new Feedback(feedbackDetails);

          // Save the user to the database
          const users = await user.findById(userID);
          if(!users){
               res.status(201).json({
                    status: 201,
                    message: 'user not exist',
                    data: users,
               });  
          }
          const savedFeed = await newFeedback.save();

          // savedFeed.userID = userID;
          // const updatedfeedback= await savedFeed.save();

          // Return the response
          res.status(201).json({
               status: 201,
               message: 'Feedback submited successfully',
               data: savedFeed,
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

module.exports = {
     CreateFeedback
}