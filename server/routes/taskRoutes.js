const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  createTask,
  editTask,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

router.post("/:boardId/task/", protect, createTask);

router.put("/:boardId/task/:taskId", protect, editTask);

router.delete("/:boardId/task/:taskId", protect, deleteTask);

module.exports = router;
