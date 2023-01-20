import React from "react";

import style from "./ResetButton.module.css"

export default function ResetButton () {
    
     const handleResetFilters = () => {
    console.log(intentar)
    window.location.reload
    
  }

    return (
        <>
            <button className={style.reset_filters} onClick={handleResetFilters} >
                RESET FILTERS
            </button>
        </>
    )
}