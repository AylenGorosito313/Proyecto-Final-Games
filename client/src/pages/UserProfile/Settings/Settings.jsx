import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { geUserActual } from "../../../middleware";
import countries from "./countries.js";
import style from "../Settings/Settings.module.css";
import NavProfile from "../NavProfile/NavProfile";
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
  console.log(image);

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
              url: result.info.url,
              public_id: result.info.public_id,
              key: result.info.public_id,
              delete: result.info.delete_token,
            },
          ]);
        }
      }
    );
    myWidget.open();
  }

  // Change info User
  let [input, setInput] = useState({});

  return (
    <div className={style.LayoutProfilePage}>
      <NavProfile />

      <div className={style.conteiner}>
        <div className={style.divNameAvatar}>
        <div className={style.Change}>
          <h1> Edit Avatar</h1>
          <button className={style.button}>
            <span>Change Avatar</span>
          </button>
        </div>

        {/* <div className={style.div}>Usarme</div>
        <div className={style.div}>
          {userActual?.name
            ? `${userActual.name} ${userActual.lastName}`
            : "Your userName"}
        </div> */}

        <div className={style.Change}>
          <h1> Edit name</h1>
          <div className={style.divInputs}>
            <input
              className={style.input}
              name="text"
              type="text"
              placeholder="Name"
            />

            <input
              className={style.input}
              name="text"
              type="text"
              placeholder="LastName"
            />
          </div>
          <button className={style.button}>
            <span>Change Name</span>
          </button>
        </div>
       </div>
        <div className={style.Change}>
          <h1> Edit Birthday</h1>

          <div className={style.divSet}>
          <label >Date</label>
            <input
              className={style.input}
              type="date"
              id="start"
              name="trip-start"
              min="1990-01-01"
              max="2023-12-31"
            />

<label >Location</label>
            <select name="city" className={style.select}>
              <option key="none" value="none">
                country
              </option>
              {countries?.map((c) => {
                return (
                  <option key={c} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className={style.div}>
          <button className={style.button}>
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  );
}
