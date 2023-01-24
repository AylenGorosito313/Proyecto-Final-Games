import toast, { Toaster } from "react-hot-toast";

export const bannerCreado = () => {
    toast(" Banner created successfully ", {
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