import React from "react";

import style from "./ResetButton.module.css"

export default function ResetButton () {
    
    return (
        <>
            <button className={style.reset_filters}>
                RESET FILTERS
            </button>
        </>
    )
}