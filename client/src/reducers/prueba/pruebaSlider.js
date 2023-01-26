import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: {
    users: [],
    admins: [],
    submissions: [],
    inactiveUsers: [],
    res: ""
  },
  searchWord: "",
  users: [],
  games: [],
  gamesdb: [],
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
  provisoryCartIds: [],
  provisoryFavoriteIds: [],
  res: {
    cart: "",
    login: "",
    register: "",
    created: "",
    provider: {},
    admLogin: "",
  },
  isLoader: false,
  userActual: {},
  itemCar: [],
  banners: {
    res: "",
    delete: "",
  },
  addComment: "",
  allBanners: [],
};

export const toolkit_prueba = createSlice({
  name: "redux-toolkit",
  initialState,
  reducers: {
    addUser: (state, actions) => {
      state.users = [...actions.payload];
    },
    provisorySearchWord: (state, actions) => {
      state.searchWord = actions.payload;
    },
    getAndromedaUsers: (state, actions) => {
      state.admin.users = [...actions.payload]
    },
    getUserSubmissions: (state, actions) => {
      state.admin.submissions = [...actions.payload]
    },
    getUsersInactive: (state, actions) => {
      state.admin.inactiveUsers = [...actions.payload]
    },
    submissionResponse: (state, actions) => {
      state.admin.res = actions.payload
    },
    deleteUserRes: (state, actions) => {
      state.admin.res = actions.payload
    },
    getAdmins: (state,actions) => {
      state.admin.admins = actions.payload
    },
    getAllGames: (state, actions) => {
      state.games = [...actions.payload];
    },
    getAllGamesDb: (state, actions) => {
      state.gamesdb = [...actions.payload];
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
      state.examinar = [...actions.payload];
    },
    getByNameDb: (state, actions) => {
      state.gamesdb = [...actions.payload];
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
    resProvisoryCartIds: (state, actions) => {
      state.provisoryCartIds = [...state.provisoryCartIds, actions.payload];
    },
    resProvisoryFavoriteIds: (state, actions) => {
      state.provisoryFavoriteIds = [
        ...state.provisoryFavoriteIds,
        actions.payload,
      ];
    },
    deleteProvisoryCartIds: (state, actions) => {
      state.provisoryCartIds = state.provisoryCartIds.filter(
        (id) => id !== actions.payload
      );
    },
    deleteProvisoryFavoriteIds: (state, actions) => {
      state.provisoryFavoriteIds = state.provisoryFavoriteIds.filter(
        (id) => id !== actions.payload
      );
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
    responseLoginAdmin: (state, actions) => {
      state.res = { ...state.res, admLogin: actions.payload };
    },
    responseCreateBanner: (state, actions) => {
      state.banners = { ...state.banners, res: actions.payload };
    },
    responseDeleteeBanner: (state, actions) => {
      state.banners = { ...state.banners, delete: actions.payload };
    },

    getAll_Banner: (state, actions) => {
      state.allBanners = actions.payload;
    },

    resAddComment: (state, actions) => {
      state.addComment = actions.payload;
    },
    modificarGameDetail: (state, actions) => {
      state.gameDetail.comentarios.push(actions.payload);
    },
  },
});
// resAddComment
export const {
  addUser,
  getAllGames,
  getByName,
  getByNameDb,
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
  Filters,
  getExaminar,
  deletedFavoriteUser,
  resProvisoryCartIds,
  providerResponseEnable,
  getLinkPaymentDETAIL,
  resProvisoryFavoriteIds,
  responseLoginAdmin,
  deleteProvisoryCartIds,
  deleteProvisoryFavoriteIds,
  responseCreateBanner,
  responseDeleteeBanner,
  getAll_Banner,
  getAndromedaUsers,
  getUserSubmissions,
  getUsersInactive,
  submissionResponse,
  resAddComment,
  modificarGameDetail,
  deleteUserRes,
  getAdmins,
  getAllGamesDb,
  provisorySearchWord
} = toolkit_prueba.actions;

export default toolkit_prueba.reducer;
