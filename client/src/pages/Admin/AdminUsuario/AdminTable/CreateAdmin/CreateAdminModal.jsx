import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import style from "./CreateAdminModal.module.css"

function CreateAdminModal({toggle}) {

    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div className={style.modal}>
        <div className={style.overlay}>
            <div className={style.modalContent}>
            <div className={style.closeModal}>
                    <button onClick={toggle}><i className="fa-solid fa-xmark fa-lg"></i></button>
                </div>
                <div className={style.headerModal}>
                    <h2>Create a New Admin</h2>
                    
                </div>
                <div className={style.aplicationContent}>
                    <form action="">
                        
                    </form>
                </div>
                <div className={style.actionsButtons} >
                    <button className={style.acceptButton}  >Create</button>

                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateAdminModal