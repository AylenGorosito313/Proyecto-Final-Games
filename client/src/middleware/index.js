import axios from "axios";

import {
    getAllGames,
    getByName,
    setIsloader,
    responseRegister
} from "../reducers/prueba/pruebaSlider";

export const getGames = () => {
    return async function (dispatch) {
        try {
            dispatch(setIsloader());
            let {data} = await axios({
                method: "GET",
                url: `http://localhost:3001/`,
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
        let {data} = await axios({
            method: "GET",
            url: `http://localhost:3001/game?search=${name}`,
        });
        dispatch(getByName(data));
    };
};



export const createUser= ({ name, lastName, email, password}) => {
    return async function (dispatch) {
      let res = await axios({
        method: "POST",
        data: { name, lastName, email, password},
        url: "http://localhost:3001/user/create",
      });
      dispatch(responseRegister(res.data));
    };
  };

