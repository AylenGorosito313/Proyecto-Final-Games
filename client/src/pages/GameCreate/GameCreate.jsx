import React from 'react'
import { useEffect} from "react";
import { useForm } from "react-hook-form";
import {useHistory} from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { CreateGame, traerGenero } from '../../middleware'
import style from '../GameCreate/GameCreate.module.css'

export default function GameCreate() {
    const dispatch = useDispatch();
   //  const history = useHistory();
    const {genre}= useSelector((state) => state.prueba)

    const {register, formState: { errors }, handleSubmit} = useForm({
      defaultValues: {
         name: "",
         background_image: "",
         rating: 0,
         genre: [],
         platforms: [],
      },
      mode: "onChange",
    });

    const onSubmit = async (data) => {
        console.log(data)
        dispatch(CreateGame(data));
      //   history.push('/')
    }
   
    useEffect(() => {
        dispatch(traerGenero());
    }, []);
   

  return (
    <div className={style.fondo}>
       
        <form onSubmit={handleSubmit(onSubmit)}>
         <div>
            <label> Name:</label>
            <input type='text' placeholder='Name of the game' {...register('name', {
                required: true,
                minLength: 5,
                maxLength: 20,
            })} />
         </div>
         {errors.name?.type === 'required' && <p>The name is required</p>}
         {errors.name?.type === 'maxLength' && <p>The name is too long</p>}
         {errors.name?.type === 'minLength' && <p>The name is too short</p>}

         <div>
            <label> Image:</label>
            <input type='text'  placeholder='Example http://...' {...register('background_image', {
                pattern: /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/
            })} />
         </div>
         {errors.background_image?.type === 'pattern' && <p>The image must be a URL</p>}


         <div>
            <label> Genre:</label>
            <select {...register('genre')}>
            {genre && genre.map((g,i) => <option key={i}>{g}</option>)}
            </select>
         </div>

         <div>
            <label> Platforms:</label>
            <input type='text' {...register('platforms')} />
         </div>

          <button type="submit">Create Game</button>
        </form>
    </div>
  )
}
