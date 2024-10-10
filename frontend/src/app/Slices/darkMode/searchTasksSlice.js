import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchKeyword: "",
  tasks: [],
  filteredTasks: [],
};

const searchTasksReducer = createSlice({
  name: "searchTasks",
  initialState,
  reducers: {
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
      state.filteredTasks = state.tasks.filter(
        (task) =>
          task.title.toLowerCase().includes(action.payload.toLowerCase()) ||
          task.description.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
      state.filteredTasks = action.payload;
    },
  },
});

export const { setSearchKeyword, setTasks } = searchTasksReducer.actions;

export default searchTasksReducer.reducer;
