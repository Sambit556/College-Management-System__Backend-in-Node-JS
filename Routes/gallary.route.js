const {   addGallary,
     getAllGallary,
     updateGallaryById,
     deleteGallaryById } = require("../Controller/gallary.controler");

     const {
        authenticateToken
    } = require("../middleware/middleware");

module.exports = app => {
    app.post("/api/addGallary", addGallary);
    app.post("/api/getAllGallary",authenticateToken, getAllGallary);
    app.post("/api/updateGallaryById",authenticateToken, updateGallaryById);
    app.post("/api/deleteGallaryById", authenticateToken, deleteGallaryById);


};