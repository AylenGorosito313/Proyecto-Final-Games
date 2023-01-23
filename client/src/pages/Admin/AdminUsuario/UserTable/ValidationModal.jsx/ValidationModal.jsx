import React from 'react';
import style from "./ValidationModal.module.css";

function ValidationModal() {
  return (
    <div className={style.modal}>
        <div className={style.overlay}>
            <div className={style.modalContent}>
                <h2>Submision Aplication</h2>
                <span>{}</span>
                <div className={style.aplicationContent}>
                    <div className={style.blockContent} >
                        <label>Email:</label>
                        <span>{}</span>
                    </div>
                    <div className={style.blockContent} >
                        <label>Game Engine:</label>
                        <span>{}</span>
                    </div>
                    <div className={style.blockContent} >
                        <label>Micro-transactions:</label>
                        <span>{}</span>
                    </div>
                    <div className={style.blockContent} >
                        <label>Reason aplication:</label>
                        <span>{}</span>
                    </div>
                </div>
                <div className={style.actionsButtons} >
                    <button className={style.acceptButton} >Accept</button>
                    <button className={style.acceptButton} >Decline</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ValidationModal