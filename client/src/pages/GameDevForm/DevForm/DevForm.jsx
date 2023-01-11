import React from "react";
import { gameEngines } from "../utils/utils";
import { useForm } from "react-hook-form";


export default function DevForm () {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }



    return (
        <>
        <form className="form-container-component" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Email</label>
                <input type="text" {...register("email", {
                    required: true,
                    minLength: 8,
                    maxLength: 48
                })} />
            </div>
            <div>
                <label>First Name</label>
                <input type="text" {...register("firstName", {
                    required: true,
                    minLength: 2,
                    maxLength: 20,
                })}/>
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" {...register("lastName", {
                    required: true,
                    minLength: 2,
                    maxLength: 20,
                })}/>
            </div>
            <div>
                <label>Why do you want to publish on Andromeda Games?</label>
                <input type="text" {...register("publishReason", {
                    required: true,
                    minLength: 50,
                    maxLength: 900,
                })}/>
            </div>
            <div>
                <label>Current engines?</label>
                <select name="" id="">
                    {gameEngines.length && gameEngines.map((game, index) => (
                        <option value={game} key={index}>
                            {game}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label>Do you plan tu use micro-trasactions?</label>
                <label>
                    Yes 
                    <input type="radio" value="yes" {...register("microTransactions")} />
                </label>
                <label>
                    No 
                    <input type="radio" value="no" {...register("microTransactions")} />
                </label>
            </div>
            <div>
                <button>
                    Submit
                </button>
            </div>
        </form>
        </>
    )
}