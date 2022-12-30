import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  games: [],
  genre: [],
  platforms: [],
  res: {
    login: "",
    register: "",
  },

  isLoader: false,
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
    getByName: (state, actions) => {
      state.games = [...actions.payload];
    },
    setIsloader: (state) => {
      state.isLoader = !state.isLoader;
    },
    responseRegister: (state, actions) => {
      state.res = { ...state.res, register: actions.payload };
    },
    GameCreate: (state, actions) => {
      state.games = [...actions.payload];
    },
    responseLogin: (state, actions) => {
      state.res = { ...state.res, login: actions.payload};
    },
    clearState:(state, actions) => {
      state.res = { ...state.res, login:""};
    },
    getGenre:(state, actions) => {
      state.genre = [...actions.payload];
    },
    getPlatforms:(state, actions) => {
      state.platforms = [...actions.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addUser,
  getAllGames,
  getByName,
  setIsloader,
  responseRegister,
  responseLogin,
  clearState,
  getGenre,
  getPlatforms,
  GameCreate,
} = toolkit_prueba.actions;

export default toolkit_prueba.reducer;
