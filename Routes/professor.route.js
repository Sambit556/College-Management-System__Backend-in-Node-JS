const {
    createProfessor,
    getAllProfessors,
    getProfessorById,
    updateProfessorById,
    deleteProfessorById,
} = require("../Controller/professor.controler");

const {
    authenticateToken
} = require("../middleware/middleware");

module.exports = app => {
    app.post("/api/createProfessor", createProfessor);
    app.post("/api/getAllProfessors", authenticateToken,getAllProfessors);
    app.post("/api/getProfessorById", authenticateToken,getProfessorById);
    app.post("/api/updateProfessorById",authenticateToken, updateProfessorById);
    app.post("/api/deleteProfessorById",authenticateToken, deleteProfessorById);
};