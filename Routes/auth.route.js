const { login, createUser, getUserById, Logout } = require("../Controller/auth.controler");

const { authenticateToken } = require('../middleware/middleware')
module.exports = app => {
     app.post("/api/login", login);
     app.post("/api/createUser", createUser);
     app.post("/api/getUserById", authenticateToken, getUserById);
     app.post("/api/Logout", Logout);
};
