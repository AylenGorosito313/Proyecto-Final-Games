import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  games: [],
};

export const toolkit_prueba = createSlice({
  name: "redux-toolkit",
  initialState,
  reducers: {
    addUser: (state, actions) => {
      state.users = [...actions.payload];
    },
    getAllGames: (state, actions) => {
      state.games = [...actions.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, getAllGames } = toolkit_prueba.actions;

export default toolkit_prueba.reducer;
