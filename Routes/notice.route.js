const {
     createNotice,
     getAllNotices,
     // getNoticeById,
     updateNoticeById,
     deleteNoticeById,
 } = require("../Controller/notice.controler");
 
 const {
     authenticateToken
 } = require("../middleware/middleware");
 
 module.exports = app => {
     app.post("/api/createNotice", createNotice);
     app.post("/api/getAllNotices", authenticateToken,getAllNotices);
     // app.post("/api/getNoticeById", authenticateToken,getNoticeById);
     app.post("/api/updateNoticeById",authenticateToken, updateNoticeById);
     app.post("/api/deleteNoticeById",authenticateToken, deleteNoticeById);
 };