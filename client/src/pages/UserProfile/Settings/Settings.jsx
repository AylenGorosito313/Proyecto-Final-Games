import React from "react";
import { useEffect, useState } from "react"; 
import { useDispatch, useSelector } from "react-redux";
import { geUserActual } from "../../../middleware";
import countries from "./countries.js";
import style from "../Settings/Settings.module.css";

export default function Settings() {
    const dispatch = useDispatch();
    const { userActual } = useSelector((state) => state.prueba);
    // console.log(userActual);

    // localStore ..........................................................
    useEffect(() => {
        let userID = window.localStorage.getItem("id");
        dispatch(geUserActual(userID));
    }, []);

    // Cloudinary ...........................................................
    const [image, setImage] = useState([]); 
    console.log(image)

    function handleOpenWidget() {
        let myWidget = window.cloudinary.createUploadWidget(
            {
                cloudName: "deuc5vq5b",
                uploadPreset: "andromedaPrueba",
            },
            (error, result) => {
                if (!error && result && result.event === "success") {
                    setImage(() => [{
                        url: result.info.url, 
                        public_id: result.info.public_id, 
                        key: result.info.public_id, 
                        delete: result.info.delete_token
                    }]); 
                };
            }
        );
        myWidget.open();
    };

    // Change info User 
    let [input, setInput] = useState({
    });

    return (
        <div>
            <br />
            <div className={style.conteiner}>
                <div className={style.div}>AVATAR</div>
                <div className={style.div}>
                    <img className={style.img} 
                    src={ 
                        userActual.length ? userActual.profile_img
                        : (image.length ? image[0].url: 
                        "https://raw.githubusercontent.com/multiavatar/Multiavatar/main/logo.png?v=001"
                        )
                    } 
                    width= '120px' 
                    height='110px'
                    alt="photoProfile" />
                </div>
                <div className={style.div}>
                    <button className={style.button}>
                        <svg height="24" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
                        <span>Change Avatar</span>
                    </button>
                </div>
                <div className={style.div}>
                    <button
                        className={style.button}
                        id="upload-widget"
                        onClick={handleOpenWidget}
                    >
                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
                    <span>Change Image</span>
                </button></div>
            </div>
            <br />
            <br />
            <div className={style.conteiner}>
                <div className={style.div}>USERNAME</div>
            <div className={style.div}>{userActual?.name ? `${userActual.name} ${userActual.lastName}` : 'Your userName' }</div>
                <div className={style.div}></div>
                <div className={style.div}><button className={style.button}>
                                            <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
                                            <span>Change Name</span>
                </button></div>
            </div>
            <div className={style.conteiner}>
                <div className={style.div}>COMPLETE NAME</div>
                <div className={style.div}><input className={style.input} name="text" type="text" placeholder="Name"/></div>
                <div className={style.div}><input className={style.input} name="text" type="text" placeholder="LastName"/></div>
                <div className={style.div}></div>
            </div>
            <div className={style.conteiner}>
                <div className={style.div}>BIRTHDAY</div>
                <div className={style.div}><input className={style.input} type="date" id="start" name="trip-start" 
                    min="1990-01-01" max="2023-12-31"/></div>
                <div className={style.div}></div>
                <div className={style.div}></div>
            </div>
            <div className={style.conteiner}>
                <div className={style.div}>LOCATION</div>
                <div className={style.div}>
                    <select name="city" className={style.select}>
                    <option key='none' value='none'>country</option>
                    {
                    countries?.map(c => {
                        return (
                            <option key={c} value={c}>{c}</option>
                        )
                    })
                    }
                    </select>
                </div>
                <div className={style.div}></div>
                <div className={style.div}></div>
            </div>
            <div className={style.conteiner}>
                <div className={style.div}></div>
                <div className={style.div}></div>
                <div className={style.div}>
                    <button className={style.button}>
                        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor"></path></svg>
                        <span>Save</span>
                    </button>
                </div>
                <div className={style.div}></div>
            </div>
        </div>
    );
}
