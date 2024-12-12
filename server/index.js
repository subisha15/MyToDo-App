const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const taskRouter = require("./routes/taskRoute");
//const { config } = require("dotenv");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/task", taskRouter);

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB");
    console.log("Connection String:", process.env.CONNECTION_STRING);
  })
  .catch((Error) => {
    console.log("Error connecting to database", Error);
  });
app.listen(3000, () => {
  console.log("Server is listening to port 3000");
});
