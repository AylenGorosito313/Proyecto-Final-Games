import axios from "axios";

import { getAllGames,getByName } from "../reducers/prueba/pruebaSlider";

export const getGames = () => {
  return async function (dispatch) {
    try {
      let res = await axios({
        method: "GET",
        url: `http://localhost:3001/`,
      });
      dispatch(getAllGames(res.data));
    
    } catch (error) {
 
    }
  };
}

export const getSearchByName = (name) => {
  return async function (dispatch) {
      let res = await axios({
        method: "GET",
        url: `http://localhost:3001/game?search=${name}`,
      });
      dispatch(getByName(res.data));
}
}


// toast('Hello World', {
//   duration: 4000,
//   position: 'top-center',

//   // Styling
//   style: {},
//   className: '',

//   // Custom Icon
//   icon: '👏',

//   // Change colors of success/error/loading icon
//   iconTheme: {
//     primary: '#000',
//     secondary: '#fff',
//   },

//   // Aria
//   ariaProps: {
//     role: 'status',
//     'aria-live': 'polite',
//   },
// });
