import axios from "axios"

import {getAllGames} from "../reducers/prueba/pruebaSlider";

function getGames (){
    return async function (dispatch) {
        let res = await axios({
          method: "GET",
          url: `http://localhost:3001/`,
        });
        dispatch(getAllGames(res.data));
}
}

export default getGames