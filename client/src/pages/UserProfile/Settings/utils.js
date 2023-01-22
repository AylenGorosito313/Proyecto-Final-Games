import toast, { Toaster } from "react-hot-toast";

const changeSettings = () => {
    toast("You have made a change", {
        position: "bottom-right",
        duration: 3000,
        icon: "✔️",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff"
      },
    });
}

export default changeSettings;