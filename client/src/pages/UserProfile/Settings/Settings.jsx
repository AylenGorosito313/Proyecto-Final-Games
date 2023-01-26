import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { geUserActual } from "../../../middleware";
import countries from "./countries.js";
import style from "../Settings/Settings.module.css";
import NavProfile from "../NavProfile/NavProfile";
import { putUser } from "../../../middleware";
import changeSettings from "./utils";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory.js";

let isFirst = true;

export default function Settings() {
  const dispatch = useDispatch();
  const { userActual } = useSelector((state) => state.prueba);

  // localStore ..........................................................
  // useEffect(()=>{
  //   if(isFirst){
  //     isFirst=false;
  //     return
  //   }
  //   useEffect(() => {
  //     // let userID = window.localStorage.getItem("id");
  //     changeSettings();
  //   }, [userActual]);
  // },[])

  // Cloudinary ...........................................................
  const [image, setImage] = useState("");

  function handleOpenWidget() {
    let myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "deuc5vq5b",
        uploadPreset: "andromedaPrueba",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setImage(() => [
            {
              profile_img: result.info.url,
              // public_id: result.info.public_id,
              // key: result.info.public_id,
              // delete: result.info.delete_token,
            },
          ]);
        }
      }
    );
    myWidget.open();
  }

  // Change info User ......................................................
  let [input, setInput] = useState({});
  let [change, setChange] = useState({});

  let handleInput = (e) => {
    e.preventDefault();
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  let handleChange = (e) => {
    e.preventDefault();
    setChange((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  let handleSaveImage = () => {
    dispatch(putUser(image[0]));
    setImage("");
  };

  let handleSaveInput = () => {
    dispatch(putUser(input));
    document.getElementById("name").value = "";
    document.getElementById("apellido").value = "";
    setTimeout(changeSettings(), 2000);
    setInput({});
  };

  let handleSaveChange = () => {
    dispatch(putUser(change));
    document.getElementById("date").value = "";
    document.getElementById("region").value = "";
    setChange({});
  };
  let isAdminTrue = localStorage.getItem("isAdmin");
  return (
    <>
      {isAdminTrue === true ? (
        <div className={style.LayoutProfilePage}>
          <h1>holi</h1>
        </div>
      ) : (
        <div className={style.LayoutProfilePage}>
          <div className={style.containerData}>
            <NavProfile />

            <div className={style.conteiner}>
              <div className={style.divNameAvatar}>
                <div className={style.Change}>
                  <h1 className={style.h1}> Edit Avatar</h1>
                  <img
                    className={style.img}
                    src={
                      image
                        ? image[0].profile_img
                        : userActual.profile_img
                        ? userActual.profile_img
                        : "https://cdn-icons-png.flaticon.com/512/1361/1361876.png"
                    }
                    alt="UploadImage"
                    width="100px"
                    height="300px"
                  />
                  <button
                    className={style.button}
                    id="upload-widget"
                    onClick={handleOpenWidget}
                  >
                    Change Avatar
                  </button>
                  {image ? (
                    <button
                      className={style.button}
                      onClick={() => handleSaveImage()}
                    >
                      {" "}
                      Save{" "}
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className={style.todosjuntos}>
                <div className={style.Edit}>
                  <h1 className={style.h1}> Edit name</h1>
                  <div className={style.divInputs}>
                    <div>
                        <input
                      className={style.input}
                      id="name"
                      type="text"
                      name="name"
                      value={input.name}
                      placeholder="Name"
                      onChange={(e) => handleInput(e)}
                    />
                    </div>
                  
                    <div>
                        <input
                      className={style.input}
                      id="apellido"
                      type="text"
                      name="lastName"
                      value={input.lastName}
                      placeholder="LastName"
                      onChange={(e) => handleInput(e)}
                    />
                    </div>
                  
                  </div>
                  <button
                    className={style.button}
                    onClick={() => handleSaveInput()}
                  >
                    <span>Save</span>
                  </button>
                </div>

                <div className={style.Birtday}>
                  <h1 className={style.h1} > Edit Birthday</h1>

                  {/* <div className={style.divSet}> */}
                  <label>Date</label>
                  <input
                    className={style.input}
                    type="date"
                    id="date"
                    name="birth_date"
                    min="1990-01-01"
                    max="2023-12-31"
                    value={change.birth_date}
                    onChange={(e) => handleChange(e)}
                  />
                  {/* </div> */}

                  <div className={style.div}>
                    <button
                      className={style.button}
                      onClick={() => handleSaveChange()}
                    >
                      <span>Save</span>
                    </button>
                  </div>
                </div>
                <div className={style.location}>
                  <h1 className={style.h1}> Edit Location</h1>
                  <label>Location</label>
                  <select
                    name="region"
                    id="region"
                    onClick={(e) => handleChange(e)}
                    className={style.select}
                  >
                    <option key="none" value="">
                      country
                    </option>
                    {countries?.map((c) => {
                      return (
                        <option
                          key={c}
                          name="region"
                          className={style.option}
                          value={change.c}
                        >
                          {c}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
