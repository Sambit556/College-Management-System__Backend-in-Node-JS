const Notice= require("../Models/notice.model");

const createNotice = async (req, res) => {
     try {

          const { noticesDesc, noticsDate, noticeTittle } = req.body;

          const newNotice = new Notice({                
               noticesDesc, noticsDate, noticeTittle
          });

          // Save the user to the database
          const savedNotice= await newNotice.save();

          // Return the response
          res.status(201).json({
               status: 201,
               message: 'Notices submited successfully',
               data: savedNotice,
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

const getAllNotices = async (req, res) => {
     try {
          const ShowNotice = await Notice.find();
          res.json({
               status: 200,
               message: "success",
               data: ShowNotice,
          });
     } catch (error) {
          res.status(500).json({
               status: 500,
               error: error.message,
          });
     }
};

const updateNoticeById = async (req, res) => {
     try {
          const Noticeid = req.body.id;

          const updatedNotice = await Notice.findByIdAndUpdate(Noticeid, req.body, {
               new: true,
          });

          if (!updatedNotice) {
               return res.status(404).json({
                    status: 404,
                    message: 'sorry image not found',
               });
          }

          res.json({
               status: 200,
               message: 'image updated successfully',
               data: updatedNotice,
          });
     } catch (error) {
          res.status(500).json({
               status: 500,
               error: error.message,
          });
     }
};

const deleteNoticeById = async (req, res) => {
     try {
          const imageinfo =  req.body.imageName && req.body.imageType && req.body. image;
          const deletedimage = await Gallary.findByIdAndDelete(imageinfo);

          if (!deletedimage) {
               return res.status(404).json({
                    status: 404,
                    message: 'image not found',
               });
          }

          res.json({
               status: 200,
               message: 'Image deleted successfully',
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
     createNotice,
     getAllNotices,
     updateNoticeById,
     deleteNoticeById,
}