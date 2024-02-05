const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const mongose = require("mongoose");
// const multer = require("multer");
const { rateLimit } = require("express-rate-limit");
var logger = require("morgan");
const keys = require("./keys/key");

// const upload = multer();
const app = express();
// app.use(upload.array());
require("dotenv").config();

const port = process.env.PORT || 5000;
mongose.Promise = global.Promise;


mongose.connect(keys.MONGODB_URL)
     .then(() => {
          console.log("connected to mongoDB🎯🍃");
     })
     .catch((error) => {
          console.log("Filled to connected mongoDB 😥", error);
     })



const limiter = rateLimit({
     windowMs: 15 * 60 * 1000, // 15 minutes
     max: 1000, // Limit each IP to 100 requests per window (here, per 15 minutes)
     standardHeaders: true, // Return rate limit info in the RateLimit-* headers
     legacyHeaders: false, // Disable the X-RateLimit-* headers
});
// ADDING RATE LIMITER TO ALL THE REQUESTS.
app.use(limiter);

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }))
     .use(bodyParser.json({ limit: "50mb" }))
     .use(cors({ "Access-Control-Allow-Origin": "*" }));
logger.token("body", (req, res) => JSON.stringify(req.body));
app.use(logger("tiny"));

require("./Routes/index.route")(app);

const server = http.createServer(app);

server.listen(port, () => {
     console.log(`server is listining on port ${port} 💥💨`);
});