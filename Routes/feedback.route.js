const { CreateFeedback } = require("../Controller/feedback.controler");


const { authenticateToken } = require('../middleware/middleware')

module.exports = app => {
    app.post("/api/feedback",authenticateToken, CreateFeedback);

};