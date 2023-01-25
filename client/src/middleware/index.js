import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  getAllGames,
  getAllGamesDb,
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
  getExaminar,
  providerResponseEnable,
  deletedFavoriteUser,
  getLinkPaymentDETAIL,
  resProvisoryCartIds,
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
  resAddComment,
  submissionResponse,
  modificarGameDetail,
  deleteUserRes,
  getAdmins,
  getByNameDb
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

export const getGamesDb = () => {
  return async function (dispatch) {
    try {
      dispatch(isLoading());
      let { data } = await axios({
        method: "GET",
        url: `http://localhost:3001/db/allGames`,
      });

      dispatch(getAllGamesDb(data));
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
      url: `http://localhost:3001/games/filters/examinar?search=${name}`,
    });
    dispatch(getByName(data));
  };
};

export const getSearchByNameDb = (name) => {
  return async function (dispatch) {
    let { data } = await axios({
      method: "GET",
      url: `http://localhost:3001/game/db?name=${name}`,
    });
    dispatch(getByNameDb(data));
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


export const enableProvider = (id, aplication) => {
  return async function (dispatch) {
    console.log(aplication)
    try {
      dispatch(isLoading());
      let { data } = await axios({
        method: "POST",
        data: aplication,
        url: `http://localhost:3001/user/provider/aplication/${id}`,
      });
      console.log(data)
      dispatch(providerResponseEnable(data));
      setTimeout(() => {
        dispatch(isLoading());
      }, 2000);
    } catch (error) {
      toast(error.message, {
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

// login user // login admin
export const LoginUser = ({email, password, Auth, name, lastName, profile_img }, verify) => {

  console.log({email, password, Auth, name, lastName, profile_img });
  return async function (dispatch) {
    try {
      let res = await axios({
        method: "POST",
        data: { email, password, Auth, name, lastName, profile_img , verify },
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

export const LoginAdmin = ({ mail, password }) => {
  return async function (dispatch) {
    try {
      let res = await axios({
        method: "POST",
        data: { mail, password },
        url: "http://localhost:3001/admin/login",
      });
      dispatch(responseLoginAdmin(res.data));
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
  
  return async function (dispatch) {
    try {
      let { data } = await axios({
        method: "POST",
        data: {},
        url: `http://localhost:3001/game/addFavorite/${user_id}/${id}`,
      });
      
      // let filterId = data.favoritos.find( item => item.id === id)
      
      dispatch(resProvisoryFavoriteIds(id))
    } catch (error) {
     
      toast(error.request.response, {
        position: "bottom-right",
        duration: 3000,
        icon: error.request.response === "You already have that game in favorites" ? "🤷" : "❌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff"
      },
    });
    }
  };
};

export const AddCart = (userId, gameId) => {
  return async function (dispatch) {
    try {
      let {data} = await axios({
        method: "POST",
        data: {},
        url: `http://localhost:3001/user/addCard/${userId}/${gameId}`,
      });
      console.log(data)
      // let filterId = data.items.find( item => item.id === gameId)
      
      dispatch(resProvisoryCartIds(gameId))
      
    } catch (error) {
      
      toast(error.request.response, {
        position: "bottom-right",
        duration: 3000,
        icon: error.request.response === "the game already exists in your cart" ? "🤷" : "❌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff"
      },
    });
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
    dispatch(deleteProvisoryCartIds(id))
  };
};

// --------- end payment -----------------------

export const deletedFavorites = (id) => {
  return async (dispatch) => {
    try {
      dispatch(deletedFavoriteUser(id));
      dispatch(deleteProvisoryFavoriteIds(id))
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

export const deletedGameAdmin = (gameId) => {
  return async (dispatch) => {
    try {
      let userId = localStorage.getItem("id");
      let { data } = await axios({
        method: "DELETE",
        url: `http://localhost:3001/game/provider/deleteGameProvider/${userId}/${gameId}`,
      });
      dispatch(getGamesDb());
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
export const modGameDetails= (coment) => {
  return async (dispatch) => {
    dispatch(modificarGameDetail(coment));
  };
};

// ----------------- ADMIN -------------

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://localhost:3001/users`
      });
      
      dispatch(getAndromedaUsers(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const getSubmissions = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://localhost:3001/get/providers/aplication`
      });
      
      dispatch(getUserSubmissions(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const getInactiveUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "GET",
        url: `http://localhost:3001/users/inactive`
      });

      dispatch(getUsersInactive(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const acceptProviderSubmission = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "POST",
        url: `http://localhost:3001/user/provider/create/${id}`
      });

      dispatch(submissionResponse(data.message))
    } catch (error) {
      console.log(error)
    }
  }
}

export const declineProviderSubmission = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "DELETE",
        url: `http://localhost:3001/user/provider/denied/${id}`
      });

      dispatch(submissionResponse(data.message))
    } catch (error) {
      console.log(error)
    }
  }
}

export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "DELETE",
        url: `http://localhost:3001/user/setInactivityUser/${id}`
      });
      console.log(data)
      dispatch(deleteUserRes(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export const getAdminsList = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios({
        method: "GET",
        url: `http://localhost:3001/admin/allAdmins`
      })
     
      dispatch(getAdmins(data))
    } catch (error) {
      console.log(error);
    }
  }
}

export const createNewAdmin = (newAdmin) => {
  console.log(newAdmin)
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "POST",
        data: newAdmin,
        url: `http://localhost:3001/admin/create`
      });

      dispatch(submissionResponse(data.message))
      setTimeout(() => {
        toast.error(data.message, {
          position: "bottom-right",
          duration: 4000,
          icon: "👍",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }, 1500);
    } catch (error) {
      console.log(error)
    }
  }
}


// ----------------- END ADMIN -------------

// crear banner

export const createBanners= (bannerInfo, adminId) => {
  return async function (dispatch) {
    try {
      let res = await axios({
        method: "POST",
        data: bannerInfo,
        url: `http://localhost:3001/admin/create/banner?adminId=${adminId}`,
      });
      dispatch(responseCreateBanner(res));
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


// / get all banners /admin/allbanner
export const deleteBannersA = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `http://localhost:3001/admin/delete/banner?id=${id}`,
      });
     dispatch(responseDeleteeBanner(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};


export const getBanners = () => {
  return async (dispatch) => {
    try {
      let { data } = await axios({
        method: "GET",
        url: `http://localhost:3001/admin/allbanner`,
      });
      console.log(data)
      dispatch( getAll_Banner(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const putUser = (inf) => {
  return async (dispatch) => {
      try{
          let userId = localStorage.getItem("id");
          // let {data} = await axios.put(`http://localhost:3001/user/${userId}`,{ body : inf});
          let {data} = await axios({
              method: 'PUT',
              url: `http://localhost:3001/user/${userId}`,
              data: inf
          });
          dispatch(getUserActual(data));
          
      }catch(e){
          console.log(e);
      }
  };
};


// add comment 
export const addComments = (coment, userId, gameId ) => {
  console.log(coment)
  return async function (dispatch) {
    try {
      let {data} = await axios({
        method: "POST",
        data: {coment},
        url: `http://localhost:3001/user/add/coment?gameId=${gameId}&userId=${userId} `,
      });

      dispatch(resAddComment(data));
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


