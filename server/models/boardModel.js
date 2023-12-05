const mongoose = require("mongoose");

const subtaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    required: true,
  },
});

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
  subtasks: {
    type: [subtaskSchema],
  },
});

const columnSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tasks: {
    type: [taskSchema],
  },
});

const boardSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  columns: {
    type: [columnSchema],
  },
});

module.exports = mongoose.model("Board", boardSchema);
