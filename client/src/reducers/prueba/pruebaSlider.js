import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  games: [],
  popularGames: [],
  gamesReleasedLasthMonth: [],
  genre: [],
  platforms: [],
  payment:{
    link:""
  },
  res: {
    login:"",
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
    popularGames: (state, actions) => {
      state.popularGames = [...actions.payload];
    },
    releasedLasthMonth: (state, actions) => {
      state.gamesReleasedLasthMonth = [...actions.payload]
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
     getLinkPayment:(state, actions) => {
      console.log(actions.payload)
      state.payment={ ...state.payment, link: actions.payload};
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
  getLinkPayment
} = toolkit_prueba.actions;

export default toolkit_prueba.reducer;
