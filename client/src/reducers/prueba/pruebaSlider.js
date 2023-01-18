import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  games: [],
  examinar: [],
  popularGames: [],
  gamesReleasedLasthMonth: [],
  filters: [],
  gameDetail: {},
  genre: [],
  cart: [],
  platforms: [],
  payment: {
    link: "",
    detailLink: "",
  },

  res: {
    cart: "",
    login: "",
    register: "",
    created: "",
    provider: {},
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
    getExaminar: (state, actions) => {
      state.examinar = [...actions.payload];
    },
    getDetail: (state, actions) => {
      state.gameDetail = actions.payload;
    },
    popularGames: (state, actions) => {
      state.popularGames = [...actions.payload];
    },
    releasedLasthMonth: (state, actions) => {
      state.gamesReleasedLasthMonth = [...actions.payload];
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
      state.res = { ...state.res, provider: actions.payload };
    },
    responseAddCart: (state, actions) => {
      let verify = actions.payload.split(" ")[actions.length - 1];
      if (verify === "400") {
        state.res = { ...state.res, cart: `You can't add repeat games` };
      } else {
        state.res = {
          ...state.res,
          cart: `You must login or register to add games to cart`,
        };
      }
    },

    GameCreate: (state, actions) => {
      state.res = { ...state.res, created: actions.payload };
    },
    responseLogin: (state, actions) => {
      state.res = { ...state.res, login: actions.payload };
    },
    clearState: (state, actions) => {
      state.res = { ...state.res, login: "", cart: "" };
    },
    clearStateCart: (state, actions) => {
      state.cart = [];
    },
    getGenre: (state, actions) => {
      state.genre = [...actions.payload];
    },
    getPlatforms: (state, actions) => {
      state.platforms = [...actions.payload];
    },
    getLinkPayment: (state, actions) => {
      state.payment = { ...state.payment, link: actions.payload };
    },
    getLinkPaymentDETAIL: (state, actions) => {
      state.payment = { ...state.payment, detailLink: actions.payload };
    },
    getCartRes: (state, actions) => {
      state.cart = [...state.cart, ...actions.payload];
    },
    deleteCarItem: (state, actions) => {
      state.cart = state.cart.filter((ele) => ele.id !== actions.payload);
    },
    getUserActual: (state, actions) => {
      state.userActual = actions.payload;
    },
    getItemsUser: (state, actions) => {
      state.itemCar = [...actions.payload];
    },
    cleanDetails: (state, actions) => {
      state.gameDetail = {};
    },
    deletedFavoriteUser: (state, actions) => {
      state.userActual.favoritos = state.userActual.favoritos.filter(
        (ele) => ele.id !== actions.payload
      );
    },
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
  Filters,
  getExaminar,
  deletedFavoriteUser,

  providerResponseEnable,
  getLinkPaymentDETAIL,
} = toolkit_prueba.actions;

export default toolkit_prueba.reducer;
