import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import CreateSuccess from "./SuccessCreate/CreateSuccess";
import "./Buttons.css";
import UploadVideogame from "../../components/UploadImage/Unpload-GameCreate/UnploadVideogames";
import UnploadGameArchive from "../../components/UploadImage/Unpload-GameCreate/UnploadGameArchive";
import { useDispatch, useSelector } from "react-redux";
import { CreateGame, traerGenero, traerPlatforms } from "../../middleware";
import ArrowBack from "../../svg/botones/ArrowBack";
import style from "../GameCreate/GameCreate.module.css";
import UploadGameCreate from "../../components/UploadImage/Unpload-GameCreate/Unpload-GameCreate";
export default function GameCreate() {
  const dispatch = useDispatch();
  // errorsImg
  const { genre, platforms, res } = useSelector((state) => state.prueba);
  const [Created, setCreated] = useState(false);
  const [errorsImg, setErrorsImg] = useState(false);
  const [Price, setPrice] = useState(false);

  const [gender, setGender] = useState({
    genere: [],
  });
  const [platform, setPlatform] = useState({
    platformarray: [],
  });

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      rating: 0,
      description: "",
      price: 0,
    },
    mode: "onChange",
  });
  let trailer = "";
  let gameArchive = "";
  let background_image = "";

  const UnploadTrailer = (Urltrailer) => {
    trailer = Urltrailer;
  };

  const UnploadImages = (ImagesURL) => {
    background_image = ImagesURL;
  };
  const UnploadArchive = (archive) => {
    gameArchive = archive;
  };

  const onSubmit = async (data) => {
    let userId = localStorage.getItem("id");
    let genres = gender.genere;
    let platforms = platform.platformarray;

    let gameInfo = { ...data, platforms, genres, trailer, background_image };

    dispatch(CreateGame(gameInfo, userId));
    setCreated(true);
  };

  const handlerGender = (event) => {
    if (!gender.genere.includes(event.target.value)) {
      setGender({ ...gender, genere: [...gender.genere, event.target.value] });
    } else {
      setGender({
        ...gender,
      });
    }
  };

  const handlerPlatforms = (event) => {
    if (!platform.platformarray.includes(event.target.value)) {
      setPlatform({
        ...platform,
        platformarray: [...platform.platformarray, event.target.value],
      });
    } else {
      setPlatform({
        ...platform,
      });
    }
  };

  const handlerPrice = () => {
    setPrice(!Price);
  };

  const handleDelete = (event) => {
    setGender({
      ...gender,
      genere: gender.genere.filter((gen) => gen !== event),
    });
  };

  const handleDeletedos = (event) => {
    setPlatform({
      ...platform,
      platformarray: platform.platformarray.filter((plat) => plat !== event),
    });
  };

  useEffect(() => {
    dispatch(traerGenero());
    dispatch(traerPlatforms());
  }, []);

  if (res.created) {
    return <CreateSuccess />;
  }
  return (
    <>
    <div className={style.mainContainer}>
    <div className={style.content}>

      <div className={style.headerDiv}>
        <div className={style.backhome}>
          <Link className={style.pLink} to={"/provedor/profile"}>
          <ArrowBack />
            <p className={style.pLink}> Back to profile </p>
          </Link>
        </div>
        <div className={style.title}>

        <h1 className={style.h1Header}> Upload your game </h1>
        </div>
      </div>
      <div className={style.allContainer}>
      <div className={style.leftContainer}>
        <form className={style.formContainer} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className={style.labels}> Game name </label>
            <input
              className={style.input}
              type="text"
              placeholder="  Name of the game"
              {...register("name", {
                required: true,
                minLength: 5,
                maxLength: 20,
              })}
            />
          </div>
          {errors.name?.type === "required" && (
            <p className={style.errors}>The name is required</p>
          )}
          {errors.name?.type === "maxLength" && (
            <p className={style.errors}>The name is too long</p>
          )}
          {errors.name?.type === "minLength" && (
            <p className={style.errors}>The name is too short</p>
          )}

          <div>
            <label className={style.labels}> Game description </label>
            <textarea
              className={style.textarea}
              type="textarea"
              placeholder=" Description of the game"
              {...register("description", {
                required: true,
                minLength: 100,
                maxLength: 900,
              })}
            />
          </div>
          {errors.description?.type === "required" && (
            <p className={style.errors}>The name is required</p>
          )}
          {errors.description?.type === "maxLength" && (
            <p className={style.errors}>
              The name is too long max 900 caracters
            </p>
          )}
          {errors.description?.type === "minLength" && (
            <p className={style.errors}>
              {" "}
              The name is too short min 100 caracters
            </p>
          )}

          <div className={style.divSelect}>
            <label className={style.labels}> Game genere </label>
            <select className={style.Select} onChange={handlerGender}>
              {genre &&
                genre.map((g, i) => (
                  <option value={g} key={i}>
                    {g}
                  </option>
                ))}
            </select>
          </div>
          <div className={style.gnreContairner}>
            {gender.genere.map((el, i) => (
              <div className={style.gnreCard} key={i}>
                <p className={style.gnreP}>{el}</p>
                <button
                  className={style.gnreButton}
                  onClick={() => handleDelete(el)}
                >
                  X
                </button>
              </div>
            ))}
          </div>

          <div className={style.divSelect}>
            <label className={style.labels}> Platforms</label>
            <select className={style.Select} onChange={handlerPlatforms}>
              {platforms &&
                platforms.map((p, i) => (
                  <option className={style.gnreCard} value={p} key={i}>
                    {p}
                  </option>
                ))}
            </select>
          </div>
          <div className={style.gnreContairner}>
            {platform.platformarray.map((el, i) => (
              <div className={style.gnreCard} key={i}>
                <p className={style.gnreP}> {el}</p>
                <button
                  className={style.gnreButton}
                  onClick={() => handleDeletedos(el)}
                >
                  X
                </button>
              </div>
            ))}
          </div>

          <div className={style.checkBoxDIV}>
            <label className={style.labels}>
              {" "}
              Do you want to monetize this game ?{" "}
            </label>
            <input
              onClick={handlerPrice}
              className={style.checkBox}
              type="checkbox"
            />
          </div>

          {Price && (
            <div>
              <label className={style.labels}>Price in US $</label>
              <input
                className={style.input}
                type="number"
                {...register("price", {
                  required: true,
                })}
              />
            </div>
          )}

          <button
            disabled={errorsImg}
            className="button-9"
            role="button"
            type="submit"
          >
            Create Game
          </button>
        </form>

      </div>
        <div className={style.right_container} >
          <div className={style.unploadDiv}>
            <UploadVideogame UnploadTrailer={UnploadTrailer} />
            <div>
              <UploadGameCreate UnploadImages={UnploadImages} />

              {errorsImg && <p> image is required</p>}
            </div>

            <UnploadGameArchive UnploadArchive={UnploadArchive} />
          </div>
        </div>
      </div>
      
    </div>
    </div>
    </>
  );
}
