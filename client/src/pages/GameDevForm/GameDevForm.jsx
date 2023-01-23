import React from "react";
import DevFormHeader from "./DevFormBanner/DevFormHeader";
import DevForm from "./DevForm/DevForm";
import { useSelector } from "react-redux";

// Css
import "./GameDevForm.css";
import FormReceived from "./FormReceived/FormReceived";
import Loading from "../../components/Loading/Loading";


export default function GameDevForm () {

    const { isLoader } = useSelector( state => state.prueba);
    const providerCreated = useSelector( state => state.prueba.res.provider)
    
    console.log(providerCreated === true)

    if(providerCreated) window.scroll({top: 0})

    return (
        <>
            <div className="dev-form-main-container">
                <div className="dev-form-wrapper">
                    {isLoader ? (
                        <div className="dev-form-loading">
                            {<Loading />}
                        </div>
                    ) : providerCreated.id ? (
                        <FormReceived />
                    ) : (
                        <>
                        <DevFormHeader />
                        <div className="form-container">
                            <DevForm />
                        </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}