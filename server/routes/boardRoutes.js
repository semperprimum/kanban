const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  getBoards,
  createBoard,
  editBoard,
  deleteBoard,
} = require("../controllers/boardController");

const router = express.Router();

router.get("/", protect, getBoards);

router.post("/", protect, createBoard);

router.put("/:id", protect, editBoard);

router.delete("/:id", protect, deleteBoard);

module.exports = router;
