require('dotenv').config()
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const initializeDb = require("./db/db.connection");
const inventoryRouter = require("./routes/routes");

const cors = require("cors");

app.use(express.json());
initializeDb();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Aryan");
});

app.use("/api/", inventoryRouter);

app.listen(3000, () => {
  console.log("Express server is running on port 3000");
});
