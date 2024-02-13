const mongoose = require("mongoose");

const mongoDbUrl = process.env.MONGO_DB_URL;

function initializeDb() {
  mongoose.connect(mongoDbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("MongoDb Connected Successfully");
  }).catch((error) => {
    console.log("MongoDb Connection Failed", error);
  })
}

module.exports = initializeDb;