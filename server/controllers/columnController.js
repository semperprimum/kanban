const asyncHandler = require("express-async-handler");
const Board = require("../models/boardModel");
const User = require("../models/userModel");

// Create Column
const createColumn = asyncHandler(async (req, res) => {
  const { boardId } = req.params;

  const column = await Board.findByIdAndUpdate(
    boardId,
    {
      $push: { columns: req.body },
    },
    { new: true, runValidators: true }
  );

  if (!column) {
    res.status(404);
    throw new Error("Board not found");
  }

  res.status(201).json(column);
});

// Read Column
const getColumn = asyncHandler(async (req, res) => {
  const { boardId, columnId } = req.params;

  const board = await Board.findById(boardId);

  if (!board) {
    res.status(404);
    throw new Error("Board not found");
  }

  const column = board.columns.id(columnId);

  if (!column) {
    res.status(404);
    throw new Error("Column not found");
  }

  res.status(200).json({ column });
});

// Update Column
const updateColumn = asyncHandler(async (req, res) => {
  const { boardId, columnId } = req.params;

  const board = await Board.findById(boardId);

  if (!board) {
    res.status(404);
    throw new Error("Board not found");
  }

  const column = board.columns.id(columnId);

  if (!column) {
    res.status(404);
    throw new Error("Column not found");
  }

  Object.assign(column, { name: req.body.name });
  await board.save();

  res.status(200).json({ column });
});

// Delete Column
const deleteColumn = asyncHandler(async (req, res) => {
  const { boardId, columnId } = req.params;

  const board = await Board.findById(boardId);

  if (!board) {
    res.status(404);
    throw new Error("Board not found");
  }

  const column = board.columns.id(columnId);

  if (!column) {
    res.status(404);
    throw new Error("Column not found");
  }

  if (column.tasks.length !== 0) {
    res.status(400);
    throw new Error("Column with tasks could not be deleted");
  }

  column.deleteOne();
  await board.save();

  res.status(200).json({ message: "Column deleted successfully" });
});

module.exports = {
  createColumn,
  getColumn,
  updateColumn,
  deleteColumn,
};
