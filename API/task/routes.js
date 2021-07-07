const express = require("express");
const { fetchTask, createTask, deleteTask } = require("./controllers");
const router = express.Router();

router.get("/", fetchTask);
router.post("/", createTask);
router.delete("/:taskId", deleteTask);

module.exports = router;
