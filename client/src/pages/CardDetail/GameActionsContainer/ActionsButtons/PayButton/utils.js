import toast, { Toaster } from "react-hot-toast";

export const noLoginNoBuy = () => {
    toast("You can´t buy if you are not register or login", {
        position: "bottom-right",
        duration: 3000,
        icon: "❌",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff"
      },
    });
}