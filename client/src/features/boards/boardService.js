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

// Get user boards
const deleteBoard = async (boardId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer: ${token}`,
    },
  };

  const response = await axios.delete(API_URL + boardId, config);
  return response.data;
};

const boardService = {
  createBoard,
  getBoards,
  deleteBoard,
};
export default boardService;
