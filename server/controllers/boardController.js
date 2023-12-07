const asyncHandler = require("express-async-handler");
const Board = require("../models/boardModel");
const User = require("../models/userModel");

/**
 * @description Get boards
 * @route GET /api/boards/
 * @access Private
 */
const getBoards = asyncHandler(async (req, res) => {
  const boards = await Board.find({ user: req.user.id });
  res.status(200).json({ boards });
});

/**
 * @description Create a board
 * @route POST /api/boards/
 * @access Private
 */
const createBoard = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Please include a board name.");
  }

  const board = await Board.create({
    user: req.user.id,
    name: req.body.name,
    columns: req.body.columns,
  });

  res.status(200).json({ board });
});

/**
 * @description Edit a board
 * @route PUT /api/boards/:id
 * @access Private
 */
const editBoard = asyncHandler(async (req, res) => {
  const board = await Board.findById(req.params.id);

  if (!board) {
    res.status(400);
    throw new Error("Board not found");
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (board.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedBoard = await Board.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedBoard);
});

/**
 * @description Delete a board
 * @route DELETE /api/boards/:id
 * @access Private
 */
const deleteBoard = asyncHandler(async (req, res) => {
  const board = await Board.findById(req.params.id);

  if (!board) {
    res.status(400);
    throw new Error("Board not found");
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  if (board.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await board.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getBoards,
  createBoard,
  editBoard,
  deleteBoard,
};
