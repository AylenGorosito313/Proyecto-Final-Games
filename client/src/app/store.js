import { configureStore } from "@reduxjs/toolkit";
import toolkit_prueba  from "../reducers/prueba/pruebaSlider";

export const store = configureStore({
    reducer: {
      prueba: toolkit_prueba
  
    },
  })