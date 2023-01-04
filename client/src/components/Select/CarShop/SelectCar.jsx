import React from 'react'
import "./SelectCar.css"
import { motion } from "framer-motion";
function SelectCar() {
  return (
    <motion.div className="select-layout-car"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{
      duration: 0.8,
      ease: "backOut",
    }}
    >
    <div className="select-container-car">
 
     </div>
     </motion.div >
  )
}

export default SelectCar