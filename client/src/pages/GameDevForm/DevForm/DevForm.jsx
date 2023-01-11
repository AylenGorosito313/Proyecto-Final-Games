import React from "react";
import { gameEngines } from "../utils/utils";
import { useForm } from "react-hook-form";

import "./DevForm.css"

export default function DevForm () {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }



    return (
        <>
        <form className="form-container-component" onSubmit={handleSubmit(onSubmit)}>
            <div className="inputs-container">
                <label className="form-label">Email</label>
                <input className="input-text" type="text" {...register("email", {
                    required: true,
                    minLength: 8,
                    maxLength: 48
                })} />
                {errors.email && <small className="fail">El campo no puede estar vacio</small>}
            </div>
            <div className="inputs-container">
                <label className="form-label">First Name</label>
                <input className="input-text" type="text" {...register("firstName", {
                    required: true,
                    minLength: 2,
                    maxLength: 20,
                })}/>
                {errors.firstName && <small className="fail">El campo no puede estar vacio</small>}
            </div >
            <div className="inputs-container">
                <label className="form-label">Last Name</label>
                <input className="input-text" type="text" {...register("lastName", {
                    required: true,
                    minLength: 2,
                    maxLength: 20,
                })}/>
                {errors.lastName && <small className="fail">El campo no puede estar vacio</small>}
            </div>
            <div className="inputs-container">
                <label className="form-label">Why do you want to publish on Andromeda Games?</label>
                <input className="input-text" type="text" {...register("publishReason", {
                    required: true,
                    minLength: 50,
                    maxLength: 900,
                })}/>
                {errors.publishReason && <small className="fail">El campo no puede estar vacio</small>}
            </div>
            <div className="form-select-container">
                <select className="select-engines" name="" id="">
                    {gameEngines.length && gameEngines.map((game, index) => (
                        <option value={game} key={index}>
                            {game}
                        </option>
                    ))}
                </select>
            </div>
            <div className="radio-container">
                <label>Do you plan tu use micro-trasactions?</label>
                <div className="radio-container-yer-or-not">
                <label>
                    Yes 
                    <input type="radio" value="yes" {...register("microTransactions")} />
                </label>
                <label>
                    No 
                    <input type="radio" value="no" {...register("microTransactions")} />
                </label>
                </div>
                {errors.microTransactions && <small className="fail">Debe elegir al menos un game engine</small>}
            </div>
            <div className="dev-form-submit">
                <button className="dev-form-button">
                    SUBMIT
                </button>
            </div>
        </form>
        </>
    )
}