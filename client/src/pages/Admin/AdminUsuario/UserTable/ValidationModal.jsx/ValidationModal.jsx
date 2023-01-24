import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from "./ValidationModal.module.css";
import "./check.css"
import { acceptProviderSubmission, declineProviderSubmission, getSubmissions } from '../../../../../middleware';

function ValidationModal({ toggle, submissionFinded }) {

    const dispatch = useDispatch();
    const { res } = useSelector( state => state.prueba.admin)

    const handleAcceptSubmission = () => {
        dispatch(acceptProviderSubmission(submissionFinded.id_user))
    }

    const handleDeclineSubmission = () => {
        dispatch(declineProviderSubmission(submissionFinded.id_user))

    }

    
  return (
    <div className={style.modal}>
        <div className={style.overlay}>
            {
            // Modal if aplication success
            res === "application approved" ? 

            <div className={style.modalContentRes}>
                <div className={style.headerModalRes}>
                    <h2>Submission Aproved</h2>
                    <i className="fa-solid fa-check fa-beat fa-6x checkAproved" ></i>
                </div>
                <div className={style.aplicationContentRes}>
                    <button 
                    className={style.resButton}
                    onClick={toggle}
                    >Ok</button>
                </div>
            </div> 
            
            :

            // Modal if aplication denied
            res === 'application denied' ?

            <div className={style.modalContentRes}>
                <div className={style.headerModalRes}>
                    <h2>Submission Denied</h2>
                    <i className="fa-solid fa-xmark fa-beat fa-6x markDenied" ></i>
                </div>
                <div className={style.aplicationContentRes}>
                    <button 
                    className={style.resButton}
                    onClick={toggle}
                    >Ok</button>
                </div>
            </div>

            : 
            
            // AProved and Denied submission modal
            <div className={style.modalContent}>
                <div className={style.closeModal}>
                    <button onClick={toggle}><i className="fa-solid fa-xmark fa-lg"></i></button>
                </div>
                <div className={style.headerModal}>
                    <h2>Pending Submission</h2>
                    <span>{submissionFinded.complete_name}</span>
                </div>
                <div className={style.aplicationContent}>
                    <div className={style.blockContent} >
                        <h5>Email:</h5>
                        <span>{submissionFinded.email}</span>
                    </div>
                    <div className={style.blockContent} >
                        <h5>Game Engine:</h5>
                        <span>{submissionFinded.game_engine}</span>
                    </div>
                    <div className={style.blockContent} >
                        <h5>Micro-transactions:</h5>
                        <span>{
                        submissionFinded.micro_transactions ? 
                        "Si" : 
                        "No" }
                        </span>
                    </div>
                    <div className={style.blockContent} >
                        <h5>Reason aplication:</h5>
                        <span>{submissionFinded.reason_aplication}</span>
                    </div>
                </div>
                <div className={style.actionsButtons} >
                    <button className={style.acceptButton} onClick={handleAcceptSubmission} >Accept</button>
                    <button className={style.declineButton} onClick={handleDeclineSubmission} >Decline</button>
                </div>
            </div>
            }
        </div>
    </div>
  )
}

export default ValidationModal