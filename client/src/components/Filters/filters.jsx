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

  // UseState for button div
  const [toggleGenderButton, setToggleGenderButton] = useState(false);
  const [togglePlatformButton, setTogglePlatformButton] = useState(false);
  const [toggleOrderButton, setToggleOrderButton] = useState(false);
  const [togglePriceButton, setTogglePriceButton] = useState(false);

  // UseState for gender options
  const [selectedOption, setSelectedOption] = useState({status:false, name:""});

  const defaultValueSelect = {
    ASC: "ASC",
    DESC: "DESC",
    MAYOR: "MAYOR",
    LOW: "LOW",
  };

  const expandGenderOption = () => {
    setToggleGenderButton(!toggleGenderButton)
  }

  const expandPlatformOption = () => {
    setTogglePlatformButton(!togglePlatformButton)
  }

  const expandPriceOption = () => {
    setTogglePriceButton(!togglePriceButton)
  }

  const handlerChangePrice= (event) => {
  let parent_platforms = ["PC", "PlayStation", "Xbox", "Apple Macintosh","Android","Linux","iOS"];
    const handlerChangePrice = (event) => {
      console.log(event.target.value);
      let prices = event.target.value;
      let actions = {
        price: prices,
        type: "FILTER_BY_PRICE",
      };
      dispatch(Filters(actions));
  };
 }

  const handlerChangeOrden = (event) => {
    console.log(event.target.value);
    let orders = event.target.value;
    let actions = {
      order: orders,
      type: "FILTER_BY_ORDER",
    };
    dispatch(Filters(actions));
  };

  const handlerGender = (event) => {
    setSelectedOption({
      ...selectedOption, 
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
    setSelectedOption({
      ...selectedOption, 
      status: true, 
      name: event.target.getAttribute("value")})

    let platforms = event.target.getAttribute("value");
    let actions = {
      platform: platforms,
      type: "FILTER_BY_PLATFORM",
    };
    dispatch(Filters(actions));
  };

  useEffect(() => {
    dispatch(traerGenero());
    dispatch(traerPlatforms());
  }, []);

  return (
    <>
    
          <div className={style.divSelect}>
            <label className={style.labels}> Order </label>
            <select onChange={handlerChangeOrden} className={style.Select}>
              <option value={defaultValueSelect.ASC}>Order A-Z</option>
              <option value={defaultValueSelect.DESC}>Order Z-A</option>
            </select>
          </div>

          <div className={style.divSelect}>
            <label className={style.labels}> Price </label>
            <select onChange={handlerChangePrice} className={style.Select}>
              <option value={defaultValueSelect.MAYOR}>Mayor price </option>
              <option value={defaultValueSelect.LOW}>Low price</option>
            </select>
          </div>

          {/* Price Filters */}

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

                <div value="MAYOR"
                  className={selectedOption.name == "MAYOR" ? 
                    style.price_options_selected :
                    style.price_options }
                    onClick={handlerGender}
                  >
                  <span value="MAYOR" >High to Low</span>
                  {selectedOption.name == "MAYOR" &&
                    <i class="fa-solid fa-check"></i>}
                </div>

                <div value="LOW"
                  className={selectedOption.name == "LOW" ? 
                    style.price_options_selected :
                    style.price_options }
                    onClick={handlerGender}
                  >
                  <span value="LOW" >Low to High</span>
                  {selectedOption.name == "LOW" &&
                    <i class="fa-solid fa-check"></i>}
                </div>

            </div>
          </div>
          
          <hr className={style.line_between_filters} />
          
          {/* Gender Filters */}
          
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
                  className={selectedOption.name == g ? 
                    style.gender_options_selected :
                    style.gender_options }
                    onClick={handlerGender}
                  >
                    <span value={g} >{g}
                    </span>
                    {selectedOption.name == g &&
                     <i class="fa-solid fa-check"></i>}
                    
                  </div>
                ))}
              </div>
          </div>

          <hr className={style.line_between_filters} />
          
          {/* Filter Platforms */}

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
                  className={ selectedOption.name == g ?
                    style.platforms_options_selected :
                    style.platforms_options }
                    onClick={handlerPlatforms}
                  >
                    <span value={g} >{g}</span>
                    {selectedOption.name == g &&
                     <i class="fa-solid fa-check"></i>}
                  </div>
                ))}
              </div>
          </div>

          <hr className={style.line_between_filters} />
    </>
  );
}
