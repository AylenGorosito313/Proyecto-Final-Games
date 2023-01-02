import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  getAllGames,
  getByName,
  setIsloader,
  responseRegister,
  GameCreate,
  responseLogin,
  getGenre,
  getPlatforms,
} from "../reducers/prueba/pruebaSlider";

export const getGames = () => {
  return async function (dispatch) {
    try {
      dispatch(setIsloader());
      let { data } = await axios({
        method: "GET",
        url: `http://localhost:3001/games`,
      });
      dispatch(getAllGames(data));
      dispatch(setIsloader());
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
      toast.error(  error.message , {
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

export const CreateGame = ({ platforms, background_image, name, rating, genre }) => {
  return async function (dispatch) {
    try {
      let res = await axios({
        method: "POST",
        data: { platforms, background_image, name, rating, genre },
        url: "http://localhost:3001/game/create",
      });
      dispatch(GameCreate(res.data));
    } catch (error) {
      toast.error(  error.message , {
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

// export const traerPlatforms = () => {
//   return async function (dispatch) {
//     let { data } = await axios({
//       method: "GET",
//       url: `http://localhost:3001/genres`,
//     });
//     dispatch(getPlatforms(data));
//   };
// };



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
    
      toast.error(  error.message , {
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
