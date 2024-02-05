const fs = require("fs");

// Redis index.js me comment karo

const devFile = require("./server");

// Redis index.js me uncomment karo

// const devFile = require("./serverProdKeys/serverCloud.js");


// var config =  require('./prod')

// if (process.env.mode === 'dev') {
//   config = require('./serverDevKeys/server.json');
// } else if (process.env.mode === 'ci') {
//   config = require('./ci');
// }

// config = require('./dev');

config = devFile;
module.exports = config;