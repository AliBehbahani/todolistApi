let tasks = require("../../tasks");

exports.fetchTask = (req, res) => {
  res.json(tasks);
};
exports.createTask = (req, res) => {
  const id = tasks.length + 1;
  const newTask = {
    id,
    ...req.body,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
};
exports.deleteTask = (req, res) => {
  const { taskId } = req.params;
  const foundTask = tasks.find((task) => task.id === +taskId);
  if (foundTask) {
    tasks = tasks.filter((task) => task.id !== +taskId);
    res.status(204).end();
  } else {
    res.status(404).json({ message: "task not found" });
  }
};
