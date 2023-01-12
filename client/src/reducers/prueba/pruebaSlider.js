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
      let verify = actions.payload.split(' ')[actions.length - 1]
      if(verify === '400'){
         state.res = { ...state.res, cart: `You can't add repeat games` };
      } else {
        state.res = { ...state.res, cart: `You must login or register to add games to cart` };
      }
     
    },

    GameCreate: (state, actions) => {
      state.res = { ...state.res, created: actions.payload};
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
    },
  //   filtresSelect:(state, actions) => {
  //     if (actions.payload) {
  //       switch (order) {
  //           case 'ASC_ALPHABETICALLY':
  //               filterByName = filterByName.sort((a, b) => a.name.localeCompare(b.name));
  //                  break;
  //           case 'DES_ALPHABETICALLY':
  //               filterByName = filterByName.sort((a, b) => b.name.localeCompare(a.name));
  //               break;
  //           case 'ASC_POPULATION':
  //               filterByName = filterByName.sort((a, b) => a.population - b.population);
  //               break;
  //           case 'DES_POPULATION':
  //               filterByName = filterByName.sort((a, b) => b.population - a.population);
  //               break;
  //           default:
  //               break;
  //       }
  //   }
  // }
}
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
