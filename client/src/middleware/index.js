import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  getAllGames,
  getByName,
  setIsLoader,
  responseRegister,
  GameCreate,
  responseLogin,
  getGenre,
  popularGames,
  releasedLasthMonth,
  getLinkPayment,
  getDetail,
  getCartRes,
  getUserActual,
  deleteCarItem,
  getItemsUser,
  cleanDetails,
  getPlatforms,
  responseAddCart,
  getExaminar,
  providerResponseEnable,
  deletedFavoriteUser,
  getLinkPaymentDETAIL,
} from "../reducers/prueba/pruebaSlider";
// localhost:3001/games/filters/examinar/routes
export const getGames = () => {
  return async function (dispatch) {
    try {
      dispatch(isLoading());
      let { data } = await axios({
        method: "GET",
        url: `http://localhost:3001/games`,
      });

      dispatch(getAllGames(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const getForFilters = (parameter) => {
  const { platform, genre, alphabeth, price, rating } = parameter;

  return async function (dispatch) {
    let filter = "?";

    if (platform) {
      filter += "platform=" + platform + "&";
    }
    if (genre) {
      filter += "genre=" + genre + "&";
    }
    if (alphabeth) {
      filter += "alphabeth=" + alphabeth + "&";
    }
    if (price) {
      filter += "price=" + price + "&";
    }
    if (rating) {
      filter += "rating=" + rating + "&";
    }

    try {
      let { data } = await axios({
        method: "GET",
        url: `http://localhost:3001/games/filters/examinar${filter}`,
      });
      console.log(data);
      dispatch(getExaminar(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};


export const getForFiltersRESET = () => {
  return async function (dispatch) {
    try {
      let { data } = await axios({
        method: "GET",
        url: `http://localhost:3001/games/filters/examinar`,
      });
      console.log(data);
      dispatch(getExaminar(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};




export const isLoading = () => {
  return async function (dispatch) {
    try {
      dispatch(setIsLoader());
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getPopularGames = () => {
  return async function (dispatch) {
    try {
      let { data } = await axios({
        method: "GET",
        url: `http://localhost:3001/games/popular`,
      });
      dispatch(popularGames(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getGamesReleasedLasthMonth = () => {
  return async function (dispatch) {
    try {
      let { data } = await axios({
        method: "GET",
        url: `http://localhost:3001/games/released`,
      });
      dispatch(releasedLasthMonth(data));
      dispatch(isLoading());
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getSearchByName = (name) => {
  return async function (dispatch) {
    let { data } = await axios({
      method: "GET",
      url: `http://localhost:3001/game?search=${name}`,
    });
    dispatch(getByName(data));
  };
};

export const getGameDetail = (id) => {
  return async function (dispatch) {
    try {
      dispatch(isLoading());
      let { data } = await axios({
        method: "GET",
        url: `http://localhost:3001/game/${id}`,
      });

      dispatch(getDetail(data));
      dispatch(isLoading());
    } catch (error) {
      console.log(error.message);
    }
  };
};

//  Creeate User and Provider
export const createUser = ({ name, lastName, email, password }) => {
  return async function (dispatch) {
    try {
      let res = await axios({
        method: "POST",
        data: { name, lastName, email, password },
        url: "http://localhost:3001/user/create",
      });
      dispatch(responseRegister(res.data));
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-right",
        duration: 4000,

        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };
};

export const enableProvider = (id) => {
  return async function (dispatch) {
    try {
      dispatch(isLoading());
      let { data } = await axios({
        method: "POST",
        url: `http://localhost:3001/user/provider/create/${id}`,
      });
      dispatch(providerResponseEnable(data));
      setTimeout(() => {
        dispatch(isLoading());
      }, 2000);
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-right",
        duration: 4000,

        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };
};

// -------------------------------------------------

export const CreateGame = (gameInfo, userId) => {
  return async function (dispatch) {
    try {
      let res = await axios({
        method: "POST",
        data: gameInfo,
        url: `http://localhost:3001/game/create/${userId}`,
      });
      console.log(res.data);
      dispatch(GameCreate(res.data));
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-right",
        duration: 4000,

        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };
};

export const traerGenero = () => {
  return async function (dispatch) {
    let { data } = await axios({
      method: "GET",
      url: `http://localhost:3001/genres`,
    });
    dispatch(getGenre(data));
  };
};

export const traerPlatforms = () => {
  return async function (dispatch) {
    let { data } = await axios({
      method: "GET",
      url: `http://localhost:3001/games/platforms`,
    });
    dispatch(getPlatforms(data));
  };
};

export const LoginUser = ({ email, password }, verify) => {
  return async function (dispatch) {
    try {
      let res = await axios({
        method: "POST",
        data: { email, password, verify },
        url: "http://localhost:3001/login/user",
      });
      dispatch(responseLogin(res.data));
    } catch (error) {
      toast.error(error.request.response, {
        position: "bottom-right",
        duration: 4000,

        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };
};

//"/user/addCard/:userId/:gameId"

export const AddFavorite = (user_id, id) => {
  console.log(user_id, id)
  return async function (dispatch) {
    try {
      let res = await axios({
        method: "POST",
        data: {},
        url: `http://localhost:3001/game/addFavorite/${user_id}/${id}`,
      });

      return res.request.status;
    } catch (error) {
      console.log(error.message);
      dispatch(responseAddCart(error.message));
    }
  };
};

export const AddCart = (userId, gameId) => {
  return async function (dispatch) {
    try {
      let res = await axios({
        method: "POST",
        data: {},
        url: `http://localhost:3001/user/addCard/${userId}/${gameId}`,
      });

      return res.request.status;
    } catch (error) {
      console.log(error.message);
      dispatch(responseAddCart(error.message));
    }
  };
};

export const getCart = (userId) => {
  return async function (dispatch) {
    try {
      dispatch(isLoading());
      let { data } = await axios({
        method: "GET",
        url: `http://localhost:3001/user/cartItems/${userId}`,
      });
      dispatch(getCartRes(data));
      dispatch(isLoading());
    } catch (error) {
      console.log(error.message);
    }
  };
};

///use/deleteItem/:userId/:gameId

export const deleteCart = (userId, gameId) => {
  return async function (dispatch) {
    try {
      let res = await axios({
        method: "DELETE",
        data: {},
        url: `http://localhost:3001/use/deleteItem/${userId}/${gameId}`,
      });
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-right",
        duration: 4000,

        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };
};

//Profile ...............................

export const geUserActual = (id) => {
  return async function (dispatch) {
    try {
      let { data } = await axios({
        method: "GET",
        url: `http://localhost:3001/user/${id}`,
      });
      dispatch(getUserActual(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getItemsCar = (id) => {
  return async function (dispatch) {
    try {
      let { data } = await axios({
        method: "GET",
        url: `http:/localhost:3001/user/cartItems/${id}`,
      });
      dispatch(getItemsUser(data));
    } catch {
      console.log(error.message);
    }
  };
};

//Payment .................................................

export const getCheckOut = (userId) => {
  return async function (dispatch) {
    try {
      let { data } = await axios({
        method: "GET",
        url: `http://localhost:3001/payment?id=${userId}`,
      });
      dispatch(getLinkPayment(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};



export const getCheckOutByDetail = (game, userId) => {
//   data = { name, img, id, genres, price };
console.log(game)
  return async function (dispatch) {
    try {
      let { data } = await axios({
        method: "POST",
        data: game,
        url: `http://localhost:3001/payment/oneItem?id=${userId}`,
      });
      dispatch(getLinkPaymentDETAIL(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const deletedItemsToCart = (id) => {
  return async (dispatch) => {
    dispatch(deleteCarItem(id));
    let userId = localStorage.getItem("id");
    dispatch(deleteCart(userId, id));
  };
};

export const deletedFavorites = (id) => {
  return async (dispatch) => {
    try {
      dispatch(deletedFavoriteUser(id));
      let userId = localStorage.getItem("id");
      let { data } = await axios({
        method: "DELETE",
        url: `http://localhost:3001/game/deletFavorite/${userId}/${id}`,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const paymentSuccess = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "GET",
        url: `http://localhost:3001/payment/success?userId=${id}`,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
};

export const deletedDetails = () => {
  return async (dispatch) => {
    dispatch(cleanDetails());
  };
};

// crear
