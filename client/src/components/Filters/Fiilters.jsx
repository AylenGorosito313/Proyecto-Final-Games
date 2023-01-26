import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getForFilters, isLoading, traerGenero, traerPlatforms } from "../../middleware";

// components
import ResetButton from "./ResetButton";

// Css styles
import style from "./filters.module.css";
import "./rotateButton.css"

export default function GameFilters() {

  const dispatch = useDispatch();
  const { genre, platforms, searchWord } = useSelector((state) => state.prueba);
  console.log(`game word search${searchWord}`)
  // Use state of querys to send
  const [filterOptions, setFilterOptions] = useState({
    platform: "", genre: "", alphabeth: "", price: "", rating: "", search: searchWord
  });
  
  // UseState For Expand Options
  const [toggleGenderButton, setToggleGenderButton] = useState(false); // const [ toggleUniversal, setToggleUniversal] = useState({genderButton: false, ...}) => onClick => setToggleUniversal.object.keys(key => key = false)
  const [togglePlatformButton, setTogglePlatformButton] = useState(false);
  const [toggleOrderButton, setToggleOrderButton] = useState(false);
  const [togglePriceButton, setTogglePriceButton] = useState(false);
  const [toggleRatingButton, setToggleRatingButton] = useState(false);

  // UseState For Selected Options
  const [selectedGenderOption, setSelectedGenderOption] = useState("");
  const [selectedPlatformOption, setSelectedPlatformOption] = useState("");
  const [selectedOrderOption, setSelectedOrderOption] = useState("");
  const [selectedPriceOption, setSelectedPriceOption] = useState("");
  const [selectedRatingOption, setSelectedRatingOption] = useState("");

  const defaultValues = {
    ASC: "ASC",
    DESC: "DESC", 
    A_Z: "A-Z",
    Z_A: "Z-A",
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
    
    let price = event.target.getAttribute("value")
    
    setSelectedPriceOption(price)

    setFilterOptions({
      ...filterOptions,
      price: price
    })

  };

  // Handle click order
  const handlerOrder = (event) => {

    let order = event.target.getAttribute("value")
    
    setSelectedOrderOption(order)

    setFilterOptions({
      ...filterOptions, 
      alphabeth: order
    })
    console.log(`after send: ${filterOptions}`)
  };

  const handlerGender = (event) => {

    let gender = event.target.getAttribute("value");
    
    setSelectedGenderOption(gender)

    setFilterOptions({
      ...filterOptions,
      genre: gender
    })
  };
  
  const handlerPlatforms = (event) => {

    let platform = event.target.getAttribute("value");
    
    setSelectedPlatformOption(platform)

    setFilterOptions({
      ...filterOptions,
      platform: platform
    })

  };

  const handlerRating = (event) => {
    
    let rating = event.target.getAttribute("value");
    
    setSelectedRatingOption(rating)

    setFilterOptions({
      ...filterOptions,
      rating: rating
    })

  };

  // const handleResetFilters = () => {
  //   console.log(intentar)
  //   window.location.reload
    
  // }

  useEffect(() => {
    filterOptions.search = searchWord
    dispatch(getForFilters(
      filterOptions
    ));
  }, [filterOptions, searchWord])

  return (
    <>
          <div className={style.reset_button} >
            <ResetButton 
            
            />
          </div>

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
                
                {/* option A-Z */}
                <div value={defaultValues.A_Z}
                  className={selectedOrderOption === defaultValues.A_Z ? 
                    style.order_options_selected :
                    style.order_options }
                    onClick={handlerOrder}
                  >
                  <span value={defaultValues.A_Z} >A - Z</span>
                  {selectedOrderOption === defaultValues.A_Z &&
                    <i className="fa-solid fa-check"></i>}
                </div>
                
                {/* Option Z-A */}
                <div value={defaultValues.Z_A}
                  className={selectedOrderOption === defaultValues.Z_A ? 
                    style.order_options_selected :
                    style.order_options }
                    onClick={handlerOrder}
                  >
                  <span value={defaultValues.Z_A}>Z - A</span>
                  {selectedOrderOption === defaultValues.Z_A &&
                    <i className="fa-solid fa-check"></i>}
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

                {/* option ASC */}
                <div value={defaultValues.ASC}
                    className={selectedPriceOption === defaultValues.ASC ? 
                      style.price_options_selected :
                      style.price_options }
                      onClick={handlerPrice}
                  >
                  <span value={defaultValues.ASC} >Low to High</span>
                  {selectedPriceOption === defaultValues.ASC &&
                    <i className="fa-solid fa-check"></i>}
                </div>
                
                {/* option DESC */}
                <div value={defaultValues.DESC}
                    onClick={handlerPrice}
                    className={selectedPriceOption === defaultValues.DESC ? 
                    style.price_options_selected :
                    style.price_options }
                  >
                  <span value={defaultValues.DESC}>High to Low</span>
                  {selectedPriceOption === defaultValues.DESC &&
                    <i className="fa-solid fa-check"></i>}
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

                {/* option ASC */}
                <div value={defaultValues.ASC}
                  className={selectedRatingOption == defaultValues.ASC ? 
                    style.rating_options_selected :
                    style.rating_options }
                    onClick={handlerRating}
                  >
                  <span value={defaultValues.ASC} >Low to High</span>
                  {selectedRatingOption == defaultValues.ASC &&
                    <i className="fa-solid fa-check"></i>}
                </div>
                
                {/* option DESC */}
                <div value={defaultValues.DESC}
                    onClick={handlerRating}
                    className={selectedRatingOption === defaultValues.DESC ? 
                    style.rating_options_selected :
                    style.rating_options }
                  >
                  <span value={defaultValues.DESC}>High to Low</span>
                  {selectedRatingOption === defaultValues.DESC &&
                    <i className="fa-solid fa-check"></i>}
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
                  className={selectedGenderOption == g ? 
                    style.gender_options_selected :
                    style.gender_options }
                    onClick={handlerGender}
                  >
                    <span value={g} >{g}
                    </span>
                    {selectedGenderOption == g &&
                     <i className="fa-solid fa-check"></i>}
                    
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
                  className={ selectedPlatformOption == g ?
                    style.platforms_options_selected :
                    style.platforms_options }
                    onClick={handlerPlatforms}
                  >
                    <span value={g} >{g}</span>
                    {selectedPlatformOption == g &&
                     <i className="fa-solid fa-check"></i>}
                  </div>
                ))}
              </div>
          </div>

          <hr className={style.line_between_filters} />
          
    </>
  )
}
