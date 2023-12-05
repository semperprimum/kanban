const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  createColumn,
  getColumn,
  updateColumn,
  deleteColumn,
} = require("../controllers/columnController");

const router = express.Router();

router
  .route("/:boardId/column/:columnId")
  .get(protect, getColumn)
  .delete(protect, deleteColumn)
  .put(protect, updateColumn);

router.post("/:boardId/column/", protect, createColumn);

module.exports = router;
