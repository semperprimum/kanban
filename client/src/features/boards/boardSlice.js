import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import boardService from "./boardService";

const initialState = {
  boards: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Create board
export const createBoard = createAsyncThunk(
  "boards/create",
  async (boardData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await boardService.createBoard(boardData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error &&
          error.response.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get user boards
export const getBoards = createAsyncThunk(
  "boards/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await boardService.getBoards(token);
    } catch (error) {
      (error.response &&
        error.response.data &&
        error &&
        error.response.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete board
export const deleteBoard = createAsyncThunk(
  "boards/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await boardService.deleteBoard(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error &&
          error.response.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createTask = createAsyncThunk(
  "boards/createTask",
  async (payload, thunkAPI) => {
    const { boardId, taskData } = payload;
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await boardService.createTask(boardId, taskData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error &&
          error.response.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const editTask = createAsyncThunk(
  "boards/editTask",
  async (payload, thunkAPI) => {
    const { boardId, taskData } = payload;
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await boardService.editTask(boardId, taskData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error &&
          error.response.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    reset: (state) => (state = initialState),
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBoard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.boards.push(action.payload);
      })
      .addCase(createBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getBoards.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBoards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.boards = action.payload;
      })
      .addCase(getBoards.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteBoard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBoard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.boards = state.boards.filter(
          (board) => board._id !== action.payload.id
        );
      })
      .addCase(deleteBoard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const boardIndex = state.boards.findIndex(
          (board) => board._id === action.payload._id
        );

        if (boardIndex !== -1) {
          const updatedBoards = [...state.boards];
          updatedBoards[boardIndex] = action.payload;
          state.boards = updatedBoards;
        }
      })
      .addCase(createTask.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(editTask.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        const boardIndex = state.boards.findIndex(
          (board) => board._id === action.payload._id
        );

        if (boardIndex !== -1) {
          const updatedBoards = [...state.boards];
          updatedBoards[boardIndex] = action.payload;
          state.boards = updatedBoards;
        }
      })
      .addCase(editTask.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = boardSlice.actions;
export default boardSlice.reducer;
