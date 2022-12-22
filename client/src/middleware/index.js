import axios from "axios";

import {
    getAllGames,
    getByName,
    setIsloader,
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
