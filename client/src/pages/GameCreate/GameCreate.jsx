import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CreateGame, traerGenero, traerPlatforms } from "../../middleware";
import style from "../GameCreate/GameCreate.module.css";

export default function GameCreate() {
  const dispatch = useDispatch();
  //  const history = useHistory();
  const { genre, platforms } = useSelector((state) => state.prueba);
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
      background_image: "",
      rating: 0,
      // platforms: [''],
      // genre: [''],
    },
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    let genre = gender.genere;
    let platforms = platform.platformarray;
    console.log({ ...data, platforms, genre });
    dispatch(CreateGame({ ...data, platforms, genre }));
    //   history.push('/')
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
  console.log(gender);
  console.log(platform);

  useEffect(() => {
    dispatch(traerGenero());
    dispatch(traerPlatforms());
  }, []);

  return (
    <div className={style.fondo}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label> Name:</label>
          <input
            type="text"
            placeholder="Name of the game"
            {...register("name", {
              required: true,
              minLength: 5,
              maxLength: 20,
            })}
          />
        </div>
        {errors.name?.type === "required" && <p>The name is required</p>}
        {errors.name?.type === "maxLength" && <p>The name is too long</p>}
        {errors.name?.type === "minLength" && <p>The name is too short</p>}

        <div>
          <label> Image:</label>
          <input
            type="text"
            placeholder="Example http://..."
            {...register("background_image", {
              pattern: /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/,
            })}
          />
        </div>
        {errors.background_image?.type === "pattern" && (
          <p>The image must be a URL</p>
        )}

        <div>
          <label> Genre:</label>
          <select onChange={handlerGender}>
            {genre &&
              genre.map((g, i) => (
                <option value={g} key={i}>
                  {g}
                </option>
              ))}
          </select>
        </div>
        {gender.genere.map((el, i) => (
          <div key={i}>
            <p>{el}</p>
            <button className="" onClick={() => handleDelete(el)}>
              X
            </button>
          </div>
        ))}

        <div>
          <label> Platforms:</label>
          <select onChange={handlerPlatforms}>
            {platforms &&
              platforms.map((p, i) => (
                <option value={p} key={i}>
                  {p}
                </option>
              ))}
          </select>
        </div>
        {platform.platformarray.map((el, i) => (
          <div key={i}>
            <p>{el}</p>
            <button className="" onClick={() => handleDeletedos(el)}>
              X
            </button>
          </div>
        ))}

        <button type="submit">Create Game</button>
      </form>
    </div>
  );
}
