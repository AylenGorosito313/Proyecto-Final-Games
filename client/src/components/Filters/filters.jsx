import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { traerGenero } from "../../middleware";
import { traerPlatforms } from "../../middleware";
import { Filters } from "../../reducers/prueba/pruebaSlider";

// Css styles
import style from "./filters.module.css";
import "./rotateButton.css"

export default function GameFilters() {

  const dispatch = useDispatch();
  const { genre, platforms } = useSelector((state) => state.prueba);

  // Use states
  const [gender, setGender] = useState({
    genere: [],
  });

  const [platform, setPlatform] = useState({
    platformarray: [],
  });

  // UseState For Expand Options
  const [toggleGenderButton, setToggleGenderButton] = useState(false);
  const [togglePlatformButton, setTogglePlatformButton] = useState(false);
  const [toggleOrderButton, setToggleOrderButton] = useState(false);
  const [togglePriceButton, setTogglePriceButton] = useState(false);
  const [toggleRatingButton, setToggleRatingButton] = useState(false);

  // UseState for Gender Options
  const [selectedGenderOption, setSelectedGenderOption] = useState({status:false, name:""});
  const [selectedPlatformOption, setSelectedPlatformOption] = useState({status:false, name:""});
  const [selectedOrderOption, setSelectedOrderOption] = useState({status:false, name:""});
  const [selectedPriceOption, setSelectedPriceOption] = useState({status:false, name:""});
  const [selectedRatingOption, setSelectedRatingOption] = useState({status:false, name:""});

  const defaultValues = {
    ASC: "ASC",
    DESC: "DESC",
    MAYOR: "MAYOR",
    LOW: "LOW",
  };

  // onClick Expand Button Options
  const expandGenderOption = () => {
    setToggleGenderButton(!toggleGenderButton)
  }

  const expandPlatformOption = () => {
    setTogglePlatformButton(!togglePlatformButton)
  }

  const expandPriceOption = () => {
    setTogglePriceButton(!togglePriceButton)
  }

  const expandOrderOption = () => {
    setToggleOrderButton(!toggleOrderButton)
  }

  const expandRatingOption = () => {
    setToggleRatingButton(!toggleRatingButton)
  }

  // ===============================

  const handlerPrice= (event) => {
  
  setSelectedPriceOption({
      ...selectedPriceOption, 
      status: true, 
      name: event.target.getAttribute("value")})
  
  };

  const handlerOrder = (event) => {
    setSelectedOrderOption({
      ...selectedOrderOption, 
      status: true, 
      name: event.target.getAttribute("value")})
    
    let orders = event.target.getAttribute("value")

    let actions = {
      order: orders,
      type: "FILTER_BY_ORDER",
    };
    dispatch(Filters(actions));
  };

  const handlerGender = (event) => {
    setSelectedGenderOption({
      ...selectedGenderOption, 
      status: true, 
      name: event.target.getAttribute("value")})
    
    let genders = event.target.getAttribute("value");
    let actions = {
      gender: genders,
      type: "FILTER_BY_GENDER",
    };
    dispatch(Filters(actions));
  };

  const handlerPlatforms = (event) => {
    setSelectedPlatformOption({
      ...selectedPlatformOption, 
      status: true, 
      name: event.target.getAttribute("value")})

    let platforms = event.target.getAttribute("value");
    let actions = {
      platform: platforms,
      type: "FILTER_BY_PLATFORM",
    };
    dispatch(Filters(actions));
  };

  const handlerRating = (event) => {
    setSelectedRatingOption({
      ...selectedRatingOption, 
      status: true, 
      name: event.target.getAttribute("value")})
  };

  useEffect(() => {
    dispatch(traerGenero());
    dispatch(traerPlatforms());
  }, []);

  return (
    <>
          {/* Order Filters */}

          <hr className={style.line_between_filters} />

          <div className={style.order_container_filter}>
            
            <button className={toggleOrderButton ?
               style.button_order_filter_selected : 
               style.button_order_filter} onClick={expandOrderOption}>
              <span>ALPHABETIC ORDER</span>
              {toggleOrderButton ? 
              <i className="fa-solid fa-angle-up rotate"></i> : 
              <i className="fa-solid fa-angle-up rotate_down"></i>}
            </button>
              
            <div className={toggleOrderButton ? 
              style.expand_container_order_options : 
              style.rendered_container_order_options} >

                <div value={defaultValues.ASC}
                  className={selectedOrderOption.name == "ASC" ? 
                    style.order_options_selected :
                    style.order_options }
                    onClick={handlerOrder}
                  >
                  <span value={defaultValues.ASC} >Ascendent</span>
                  {selectedOrderOption.name == "ASC" &&
                    <i class="fa-solid fa-check"></i>}
                </div>

                <div value={defaultValues.DESC}
                  className={selectedOrderOption.name == "DESC" ? 
                    style.order_options_selected :
                    style.order_options }
                    onClick={handlerOrder}
                  >
                  <span value={defaultValues.DESC} >Descendent</span>
                  {selectedOrderOption.name == "DESC" &&
                    <i class="fa-solid fa-check"></i>}
                </div>

            </div>
          </div>

          <hr className={style.line_between_filters} />

          {/* Price Filter */}

          <div className={style.price_container_filter}>
            
            <button className={togglePriceButton ?
               style.button_price_filter_selected : 
               style.button_price_filter} onClick={expandPriceOption}>
              <span>PRICE</span>
              {togglePriceButton ? 
              <i className="fa-solid fa-angle-up rotate"></i> : 
              <i className="fa-solid fa-angle-up rotate_down"></i>}
            </button>

            <div className={togglePriceButton ? 
              style.expand_container_price_options : 
              style.rendered_container_price_options} >

                <div value={defaultValues.ASC}
                  className={selectedPriceOption.name == "ASC" ? 
                    style.price_options_selected :
                    style.price_options }
                    onClick={handlerPrice}
                  >
                  <span value={defaultValues.ASC} >High to Low</span>
                  {selectedPriceOption.name == "ASC" &&
                    <i class="fa-solid fa-check"></i>}
                </div>

                <div value={defaultValues.DESC}
                  className={selectedPriceOption.name == "DESC" ? 
                    style.price_options_selected :
                    style.price_options }
                    onClick={handlerPrice}
                  >
                  <span value={defaultValues.DESC} >Low to High</span>
                  {selectedPriceOption.name == "DESC" &&
                    <i class="fa-solid fa-check"></i>}
                </div>

            </div>
          </div>
          
          <hr className={style.line_between_filters} />
          
          {/* Rating Filter */}

          <div className={style.rating_container_filter}>
            
            <button className={toggleRatingButton ?
               style.button_rating_filter_selected : 
               style.button_rating_filter} onClick={expandRatingOption}>
              <span>RATING</span>
              {toggleRatingButton ? 
              <i className="fa-solid fa-angle-up rotate"></i> : 
              <i className="fa-solid fa-angle-up rotate_down"></i>}
            </button>
            
            <div className={toggleRatingButton ? 
              style.expand_container_rating_options : 
              style.rendered_container_rating_options} >

                <div value={defaultValues.ASC}
                  className={selectedRatingOption.name == "ASC" ? 
                    style.rating_options_selected :
                    style.rating_options }
                    onClick={handlerRating}
                  >
                  <span value={defaultValues.ASC} >High to Low</span>
                  {selectedRatingOption.name == "ASC" &&
                    <i class="fa-solid fa-check"></i>}
                </div>

                <div value={defaultValues.DESC}
                  className={selectedRatingOption.name == "DESC" ? 
                    style.rating_options_selected :
                    style.rating_options }
                    onClick={handlerRating}
                  >
                  <span value={defaultValues.DESC} >Low to High</span>
                  {selectedRatingOption.name == "DESC" &&
                    <i class="fa-solid fa-check"></i>}
                </div>

            </div>
          </div>
          
          <hr className={style.line_between_filters} />

          {/* Gender Filter */}
          
          <div className={style.gender_container_filter}>
            
            <button className={toggleGenderButton ?
               style.button_gender_filter_selected : 
               style.button_gender_filter} onClick={expandGenderOption}>
              <span>GENDER</span>
              {toggleGenderButton ? 
              <i className="fa-solid fa-angle-up rotate"></i> : 
              <i className="fa-solid fa-angle-up rotate_down"></i>}
            </button>

            <div className={toggleGenderButton ? 
              style.expand_container_gender_options : 
              style.rendered_container_gender_options} >
              {genre &&
                genre.map((g, i) => (
                  <div 
                  value={g}
                  key={i} 
                  className={selectedGenderOption.name == g ? 
                    style.gender_options_selected :
                    style.gender_options }
                    onClick={handlerGender}
                  >
                    <span value={g} >{g}
                    </span>
                    {selectedGenderOption.name == g &&
                     <i class="fa-solid fa-check"></i>}
                    
                  </div>
                ))}
              </div>
          </div>

          <hr className={style.line_between_filters} />
          
          {/* Platforms Filter */}

          <div className={style.platforms_container_filter}>
            
            <button className={togglePlatformButton ?
               style.button_platforms_filter_selected : 
               style.button_platforms_filter} onClick={expandPlatformOption}>
              <span>PLATFORMS</span>
              {togglePlatformButton ? 
              <i className="fa-solid fa-angle-up rotate"></i> : 
              <i className="fa-solid fa-angle-up rotate_down"></i>}
            </button>

            <div className={togglePlatformButton ? 
              style.expand_container_platforms_options : 
              style.rendered_container_platforms_options} >
              {platforms &&
                platforms.map((g, i) => (
                  <div 
                  value={g}
                  key={i} 
                  className={ selectedPlatformOption.name == g ?
                    style.platforms_options_selected :
                    style.platforms_options }
                    onClick={handlerPlatforms}
                  >
                    <span value={g} >{g}</span>
                    {selectedPlatformOption.name == g &&
                     <i class="fa-solid fa-check"></i>}
                  </div>
                ))}
              </div>
          </div>

          <hr className={style.line_between_filters} />
    </>
  )
}
