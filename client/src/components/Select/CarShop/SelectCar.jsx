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
       {/* <div className="option-container-car">
       <p className="product-name-car">  Su producto </p>
       </div>
       <div className="option-container">
       <p className="option-name">Settings</p>
       </div>
 
       <div className="option-container" >
      <p className="option-name">Logut</p> */}
       {/* </div> */}
     </div>
     </motion.div >
  )
}

export default SelectCar
