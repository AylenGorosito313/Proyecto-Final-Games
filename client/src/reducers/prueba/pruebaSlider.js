import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  games: [],
  popularGames: [],
  gamesReleasedLasthMonth: [],
  gameDetail: {},
  genre: [],
  cart:[],
  platforms: [],
  payment:{
    link:""
  },

  res: {
    cart:"",
    login:"",
    register: "",
    provider: ""
  },
  isLoader: false,
  userActual: {},
  itemCar: [],
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
    getDetail: (state,actions) => {
      state.gameDetail = actions.payload;
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
    setIsLoader: (state) => {
      state.isLoader = !state.isLoader;
    },
    responseRegister: (state, actions) => {
      state.res = { ...state.res, register: actions.payload };
    },
    providerResponseEnable: (state, actions) => {
      state.res = {...state.res, provider: actions.payload}
    },
    responseAddCart: (state, actions) => {
      state.res = { ...state.res, cart: actions.payload };
    },
    GameCreate: (state, actions) => {
      state.games = [...actions.payload];
    },
    responseLogin: (state, actions) => {
      state.res = { ...state.res, login: actions.payload};
    },
    clearState:(state, actions) => {
      state.res = { ...state.res, login:"", cart:""};
    },
    clearStateCart:(state, actions) => {
      state.cart = [];
    },
    getGenre:(state, actions) => {
      state.genre = [...actions.payload];
    },
    getPlatforms:(state, actions) => {
      state.platforms = [...actions.payload];
    },
    getLinkPayment:(state, actions) => {
      state.payment={ ...state.payment, link: actions.payload};
    },
    getCartRes:(state, actions) => {
      state.cart=[...state.cart, ...actions.payload];
    },
    deleteCarItem: (state, actions) => {
      state.cart = state.cart.filter(ele => ele.id !== actions.payload)
    },
    getUserActual: (state, actions) => {
        state.userActual = actions.payload
    },
    getItemsUser: (state, actions) => {
      state.itemCar = [...actions.payload]
    },
    cleanDetails: (state, actions) => {
      state.gameDetail = {}
    }
  },
});
export const {
  addUser,
  getAllGames,
  getByName,
  setIsLoader,
  responseRegister,
  responseLogin,
  getCartRes,
  clearState,
  getGenre,
  getPlatforms,
  GameCreate,
  getLinkPayment,
  popularGames,
  releasedLasthMonth,
  getDetail,
  clearStateCart,
  deleteCarItem,
  getUserActual,
  getItemsUser,
  cleanDetails,
  responseAddCart,
  providerResponseEnable
} = toolkit_prueba.actions;

export default toolkit_prueba.reducer;
