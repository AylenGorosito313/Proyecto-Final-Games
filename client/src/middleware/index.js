import axios from "axios";
import { toast } from "react-hot-toast";
import { getAllGames } from "../reducers/prueba/pruebaSlider";

function getGames() {
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

export default getGames;

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
