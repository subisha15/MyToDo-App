const Task = require("../models/task.model");

const createTask = async (req, res) => {
  const newTask = await Task.create({ task: req.body.userTask });
  return res.status(201).json({ msg: "Task created", newTask });
};

//fetching task
const getAllTasks = async (req, res) => {
  const tasks = await Task.find();
  console.log(tasks);

  return res.status(200).json({ tasks });
};
//delete Task
const deleteTask = async (req, res) => {
  console.log("Started deleteTask()");
  const id = req.query.id;
  console.log(id);
  const deletedTask = await Task.findByIdAndDelete(id);
  return res.status(200).json({ msg: deletedTask });
};
const getOneTask = async (req, res) => {
  const id = req.query.id;
  const task = await Task.findById(id);
  return res.status(200).json({ task });
};

const updateTask = async (req, res) => {
  const id = req.query.id;
  const { task } = req.body;
  const updatedTask = await Task.findByIdAndUpdate(id, { task }, { new: true });
  console.log(updatedTask);

  return res.status(200).json({ msg: "Task updated", updatedTask });
};

module.exports = {
  createTask,
  getAllTasks,
  deleteTask,
  getOneTask,
  updateTask,
};
