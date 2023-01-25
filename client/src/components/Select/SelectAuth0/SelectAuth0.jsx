import React from "react";
import { motion } from "framer-motion";
import "../SelectProfile.css";
import LogoutButton from "../../LoginButton/LogoutButton";
export default function SelectAuth0() {
  return (
    <>
      <motion.div
        className="select-layout"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.4,
          ease: "backOut",
        }}
      >
        <div className="select-container">
          <div className="option-container">
            <LogoutButton />
          </div>
        </div>
      </motion.div>
    </>
  );
}
