import React from "react";
import "./Select-N.css";
import { motion } from "framer-motion";
export default function SelectNotificaciones() {
  return (
    
    <motion.div
      className="select-layout-noti"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.8,
        ease: "backOut",
      }}
    >
      <div className="select-container-noti">
        <div className="format-container-noti">
          <p className="titulo-noti">Tiutilo</p>
          <p className="descripcion-noti">descripcion</p>
        </div>
      </div>
    </motion.div>
  );
}
