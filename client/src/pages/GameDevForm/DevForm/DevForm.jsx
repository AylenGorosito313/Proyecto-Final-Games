import React, { useEffect } from "react";
import { gameEngines } from "../utils/utils";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import "./DevForm.css"
import { enableProvider } from "../../../middleware";

export default function DevForm () {

    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { res } = useSelector( state => state.prueba )
    
    let userID = window.localStorage.getItem("id");

    const onSubmit = (data) => {
        console.log(data)
        dispatch(enableProvider(userID, data))   
    }

    return (
        <>
        <form className="form-container-component" onSubmit={handleSubmit(onSubmit)}>

            {/* Email input */}
            <div className="inputs-container">
                <label className="form-label">Email</label>
                <input className="input-text" type="text" placeholder=""
                {...register("email", {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === "required" && 
                <small className="fail">The field cannot be empty</small>}
                {errors.email?.type === "pattern" && 
                <small className="fail">the format of this email is incorrect</small>}
            </div>

            {/* First Name input */}
            <div className="inputs-container">
                <label className="form-label">First Name</label>
                <input className="input-text" type="text" {...register("firstName", {
                    required: true,
                    minLength: 2,
                    maxLength: 20,
                })}/>
                {errors.firstName?.type === "required" && 
                <small className="fail">The field cannot be empty</small>}
                {errors.firstName?.type === "minLength" && 
                <small className="fail">You must enter at least 2 characters</small>}
            </div >

            {/* Last Name input */}
            <div className="inputs-container">
                <label className="form-label">Last Name</label>
                <input className="input-text" type="text" {...register("lastName", {
                    required: true,
                    minLength: 2,
                    maxLength: 20,
                })}/>
                {errors.lastName?.type === "required" && 
                <small className="fail">The field cannot be empty</small>}
                {errors.lastName?.type === "minLength" && 
                <small className="fail">You must enter at least 2 characters</small>}
            </div>

            {/* Publish Reason input */}
            <div className="inputs-container">
                <label className="form-label">Why do you want to publish on Andromeda Games?</label>
                <input className="input-text" type="text" {...register("reason_aplication", {
                    required: true,
                    minLength: 30,
                    maxLength: 900,
                })}/>
                {errors.publishReason?.type === "required" && 
                <small className="fail">The field cannot be empty</small>}
                {errors.publishReason?.type === "minLength" && 
                <small className="fail">You must enter at least 30 characters</small>}
            </div>

            {/* Select Game Engine input */}
            <div className="form-select-container">
                <label className="form-label">Which game engine are you using?</label>
                <select className="select-engines" {...register("game_engine", {
                    required: true
                })}>
                    {gameEngines.length && gameEngines.map((game, index) => (
                        <option value={game} key={index}>
                            {game}
                        </option>
                    ))}
                </select>
                {errors.gameEngine?.type === "required" && 
                <small className="fail">you must choose at least one game engine</small>}
            </div>

            {/* Micro transactions input */}
            <div className="radio-container">
                <label  className="form-label">Do you plan tu use micro-trasactions?</label>
                <div className="radio-container-yer-or-not">
                <label>
                    Yes 
                    <input type="radio" value="yes" {...register("micro_transactions")} />
                </label>
                <label>
                    No 
                    <input type="radio" value="no" {...register("micro_transactions")} />
                </label>
                </div>
            </div>

            {/* Submission button */}
            <div className="dev-form-submit">
                <button className="dev-form-button">
                    SUBMIT
                </button>
            </div>

        </form>
        </>
    )
}