const {
    AddAdmission,
    getAllStudents,
    getStudentById,
    updateStudentById,
    getAllcourses
    // deleteStudentById,
} = require("../Controller/student.controller");

const {
    authenticateToken
} = require("../middleware/middleware");

module.exports = app => {
    app.post("/api/AddAdmission", AddAdmission);
    app.post("/api/getAllStudents",authenticateToken, getAllStudents);
    app.post("/api/getAllcourses",authenticateToken, getAllcourses);
    app.post("/api/getStudentById",authenticateToken, getStudentById);
    app.post("/api/updateStudentById",authenticateToken, updateStudentById);
    // app.post("/api/deleteStudentById",authenticateToken, deleteStudentById);
};