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
} from "../reducers/prueba/pruebaSlider";

export const getGames = () => {
  return async function (dispatch) {
    try {
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
      let { data } = await axios({
        method: "GET",
        url: `http://localhost:3001/game/${id}`,
      });

      dispatch(getDetail(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};

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

export const CreateGame = ({
  platforms,
  background_image,
  name,
  rating,
  genre,
}) => {
  return async function (dispatch) {
    try {
      console.log(name);
      console.log(platforms);
      console.log(genre);
      let res = await axios({
        method: "POST",
        data: { platforms, background_image, name, rating, genre },
        url: "http://localhost:3001/game/create",
      });
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

export const LoginUser = ({ email, password }) => {
  return async function (dispatch) {
    try {
      let res = await axios({
        method: "POST",
        data: { email, password },
        url: "http://localhost:3001/login/user",
      });
      dispatch(responseLogin(res.data));
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



//"/user/addCard/:userId/:gameId"

export const AddCart = (userId, gameId) => {
  return async function (dispatch) {

    try {
  console.log(userId,gameId)
      let res = await axios({
        method: "POST",
        data: {},
        url: `http://localhost:3001/user/addCard/${userId}/${gameId}`,
      });
      // console.log(res);
      // dispatch(respose(res));
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




export const getCart = (userId) => {
  return async function (dispatch) {
    try {
      let { data } = await axios({
        method: "GET",
        url: `http://localhost:3001/user/cartItems/${userId}`,
      });
console.log(data)
      dispatch(getCartRes(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};


///use/deleteItem/:userId/:gameId


export const deleteCart = (userId, gameId) => {
  return async function (dispatch) {

    try {
  console.log(userId,gameId)
      let res = await axios({
        method: "DELETE",
        data: {},
        url: `http://localhost:3001/use/deleteItem/${userId}/${gameId}`,
      });
      // console.log(res);
      // dispatch(respose(res));
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

export const geUserActual = (id) =>{
  return async function (dispatch){
    try{
      let { data } = await axios({
        method: "GET",
        url: `http://localhost:3001/user/${id}`,
      });
      // console.log(data + ' data');
      dispatch(getUserActual(data));
      // console.log(typeof data);
      // dispatch(getUserActual(data.json()));
    }catch{
      console.log(error.message);
    }
  };
};


// /payment


export const getCheckOut = (userId) => {
  return async function (dispatch) {
    try {
      let { data } = await axios({
        method: "GET",
        url: `http://localhost:3001/payment?id=${userId}`,
      });
console.log(data)
      dispatch(getLinkPayment(data));
    } catch (error) {
      console.log(error.message);
    }
  };
};
