const express = require("express");
const {
  createTask,
  getAllTasks,
  deleteTask,
  getOneTask,
  updateTask,
} = require("../controller/task.controller");

const taskRouter = express.Router();

taskRouter.post("/create", createTask);
taskRouter.get("/show", getAllTasks);
taskRouter.delete("/delete", deleteTask);
taskRouter.get("/one", getOneTask);
taskRouter.put("/one", updateTask);

module.exports = taskRouter;
