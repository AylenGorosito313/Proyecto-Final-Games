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
  getDetail
} from "../reducers/prueba/pruebaSlider";

export const getGames = () => {
    return async function (dispatch) {
        try {
            let {data} = await axios({
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
        url: `http://localhost:3001/games/popular`
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
        url: `http://localhost:3001/games/released`
      });
      dispatch(releasedLasthMonth(data));
    } catch (error) {
      console.log(error.message);
    }
  }
}

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
  }
}

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
      console.log(name)
      console.log(platforms)
      console.log( genre)
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

export const CreatePayment = ({ name, img, id, genres, price }) => {
  return async function (dispatch) {
    try {
      console.log(name, img, id, genres, price);
      let res = await axios({
        method: "POST",
        data:{ name,
        img,
        id,
        genres,
        price,
      },
        url: "http://localhost:3001/payment",
      });
      console.log(res);
      dispatch(getLinkPayment(res));
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
