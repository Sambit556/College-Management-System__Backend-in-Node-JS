const Gallary= require("../Models/gallary.model");

const addGallary = async (req, res) => {
     try {

          const { imageName, imageType, image } = req.body;

          const newImage = new Gallary({                /////////////////////never used////////////////////////////
               imageName, imageType, image
          });

          // Save the user to the database
          const savedImage = await newImage.save();

          // Return the response
          res.status(201).json({
               status: 201,
               message: 'image submited successfully',
               data: savedImage,
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

const getAllGallary = async (req, res) => {
     try {
          const image = await Gallary.find();
          res.json({
               status: 200,
               message: "success",
               data: image,
          });
     } catch (error) {
          res.status(500).json({
               status: 500,
               error: error.message,
          });
     }
};

const updateGallaryById = async (req, res) => {
     try {
          const imageid = req.body.id;

          const updatedimage = await Gallary.findByIdAndUpdate(imageid, req.body, {
               new: true,
          });

          if (!updatedimage) {
               return res.status(404).json({
                    status: 404,
                    message: 'sorry image not found',
               });
          }

          res.json({
               status: 200,
               message: 'image updated successfully',
               data: updatedimage,
          });
     } catch (error) {
          res.status(500).json({
               status: 500,
               error: error.message,
          });
     }
};

const deleteGallaryById = async (req, res) => {
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
     addGallary,
     getAllGallary,
     updateGallaryById,
     deleteGallaryById
}