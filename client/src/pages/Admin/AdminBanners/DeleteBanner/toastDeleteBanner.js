import toast, { Toaster } from "react-hot-toast";

export const bannerEliminado = () => {
    toast("banner removed successfully", {
        position: "bottom-right",
        duration: 3000,
        icon: "👍",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff"
      },
    });
}