import axios from "axios";

const API_URL = "/api/boards/";

// Create new board
const createBoard = async (boardData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer: ${token}`,
    },
  };

  const response = await axios.post(API_URL, boardData, config);
  return response.data.board;
};

// Get user boards
const getBoards = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer: ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);
  return response.data.boards;
};

// Delete board
const deleteBoard = async (boardId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer: ${token}`,
    },
  };

  const response = await axios.delete(API_URL + boardId, config);
  return response.data;
};

// Delete board
const editBoard = async (boardId, boardData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer: ${token}`,
    },
  };

  const response = await axios.put(API_URL + boardId, boardData, config);
  console.log(response);
  return response.data;
};

// Create task
const createTask = async (boardId, taskData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer: ${token}`,
    },
  };

  const response = await axios.post(
    API_URL + boardId + "/task",
    taskData,
    config
  );
  return response.data;
};

// Edit task
const editTask = async (boardId, taskData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer: ${token}`,
    },
  };

  const response = await axios.put(
    API_URL + boardId + "/task/" + taskData._id,
    taskData,
    config
  );
  return response.data;
};

// Delte task
const deleteTask = async (boardId, taskId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer: ${token}`,
    },
  };

  const response = await axios.delete(
    API_URL + boardId + "/task/" + taskId,
    config
  );
  return response.data;
};

const boardService = {
  createBoard,
  getBoards,
  deleteBoard,
  createTask,
  editTask,
  deleteTask,
  editBoard,
};
export default boardService;
