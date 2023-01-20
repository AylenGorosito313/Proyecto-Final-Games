import toast, { Toaster } from "react-hot-toast";

export const platformImage = (el) => {

   if(el === "PC"){
    return <i className="fa-brands fa-windows fa-lg"></i>
   }
   if(el === "PlayStation"){
    return <i className="fa-brands fa-playstation fa-lg"></i>
   }
   if(el === "Xbox"){
    return <i className="fa-brands fa-xbox fa-lg"></i>
   }
   
  }

  export const priceFactor = (el) => {
      if(el >= 3.5) return ((el * 0.5) + 100).toFixed(2)
      else return ((el * 0.5) + 0.22).toFixed(2)
  }

  export const noLoginNoCart = () =>
      toast("You must login to add games to cart", {
        position: "bottom-right",
        duration: 3000,
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff"
      },
    });

    export const gamesRepeatedInCart = () =>
    
      toast("This game is already added to your cart", {
        position: "bottom-right",
        duration: 2000,
        icon: "🤷",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
      }
  });