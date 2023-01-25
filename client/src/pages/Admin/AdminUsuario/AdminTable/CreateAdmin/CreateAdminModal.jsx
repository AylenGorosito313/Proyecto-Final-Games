import React from 'react'
import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { createNewAdmin } from '../../../../../middleware';
import style from "./CreateAdminModal.module.css"

function CreateAdminModal({toggle}) {

    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { res } = useSelector(state => state.prueba.admin)
    
    // state to show and hide password
    const [showPassword, setShowPassword] = useState(false)


    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleCreateAdmin = (data) => {
        let dataEdited= {...data,  acountAdmin: "admin@andromeda.com",
        secret_password: "Admin07@" }
        dispatch(createNewAdmin(dataEdited))
        toggle()
    }


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
                    <form onSubmit={handleSubmit(handleCreateAdmin)}>

                        {/* Complete name */}
                        <div className={style.inputs_container}>
                            <label className="form-label">Complete name</label>
                            <input className="input-text" type="text" {...register("name", {
                                required: true,
                                minLength: 2,
                                maxLength: 20,
                            })}/>
                            {errors.name?.type === "required" && 
                            <small className="fail">The field cannot be empty</small>}
                            {errors.name?.type === "minLength" && 
                            <small className="fail">You must enter at least 2 characters</small>}
                        </div >

                        {/* Email input */}
                        <div className={style.inputs_container}>
                            <label className="form-label">Email</label>
                            <input className="input-text" type="text" placeholder=""
                            {...register("mail", {
                                required: true,
                                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                            })} />
                            {errors.mail?.type === "required" && 
                            <small className="fail">The field cannot be empty</small>}
                            {errors.mail?.type === "pattern" && 
                            <small className="fail">the format of this email is incorrect</small>}
                        </div>

                        {/* Password */}
                        <div className={style.inputs_container}>
                            <label className="form-label">Password</label>
                            <input className="input-text" type={showPassword ? "text" : "password"} {...register("password", {
                                required: true,
                                minLength: 8,
                                maxLength: 20,
                            })}/>
                            <i className="fa-solid fa-eye" onClick={handleShowPassword} ></i>
                            {errors.password?.type === "required" && 
                            <small className="fail">You must specify a password</small>}
                            {errors.password?.type === "minLength" && 
                            <small className="fail">Password must have at least 8 characters</small>}
                        </div>

                        <div className={style.actionsButtons} >
                            <button className={style.acceptButton}  >Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateAdminModal