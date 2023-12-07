const asyncHandler = require("express-async-handler");
const Board = require("../models/boardModel");
const User = require("../models/userModel");

/**
 * @description Create a task in a board
 * @route POST /api/boards/:boardId/task/
 * @access Private
 */
const createTask = asyncHandler(async (req, res) => {
  const { title, description, status, subtasks } = req.body;
  const boardId = req.params.boardId;

  const board = await Board.findById(boardId);
  if (!board) {
    res.status(404);
    throw new Error("Board not found");
  }

  const column = board.columns.find((col) => col.name === status);
  if (!column) {
    res.status(404);
    throw new Error("Column not found");
  }

  const newTask = {
    title,
    description,
    status,
    subtasks,
  };

  column.tasks.push(newTask);

  await board.save();
  res.status(201).json(board);
});

/**
 * @description Edit a task in a board
 * @route PUT /api/boards/:boardId/task/:taskId
 * @access Private
 */
const editTask = asyncHandler(async (req, res) => {
  const { title, description, status, subtasks } = req.body;
  const boardId = req.params.boardId;
  const taskId = req.params.taskId;

  const board = await Board.findById(boardId);
  if (!board) {
    res.status(404);
    throw new Error("Board not found");
  }

  const task = board.columns
    .flatMap((col) => col.tasks)
    .find((t) => t._id.equals(taskId));

  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (board.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  // Check if the status (column name) is updated
  if (status && status !== task.status) {
    // Find the current column and remove the task from it
    const currentColumn = board.columns.find((col) => col.name === task.status);
    if (currentColumn) {
      currentColumn.tasks = currentColumn.tasks.filter(
        (t) => !t._id.equals(taskId)
      );
    }

    // Find the new column and add the task to it
    const newColumn = board.columns.find((col) => col.name === status);
    if (newColumn) {
      task.status = status;
      newColumn.tasks.push(task);
    } else {
      return res.status(404).json({ error: "New column not found" });
    }
  }

  // Update other task fields
  task.title = title || task.title;
  task.description = description || task.description;
  task.subtasks = subtasks || task.subtasks;

  await board.save();
  res.json(board);
});

/**
 * @description Delete a task in a board
 * @route DELETE /api/boards/:boardId/task/:taskId
 * @access Private
 */
const deleteTask = asyncHandler(async (req, res) => {
  const { boardId, taskId } = req.params;

  const board = await Board.findById(boardId);

  if (!board) {
    res.status(404);
    throw new Error("Board not found");
  }

  const task = board.columns
    .flatMap((col) => col.tasks)
    .find((t) => t._id.equals(taskId));

  if (!task) {
    res.status(404);
    throw new Error("Task not found");
  }

  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (board.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  task.deleteOne();
  await board.save();

  res.status(200).json({ id: task.id });
});

module.exports = {
  createTask,
  editTask,
  deleteTask,
};
