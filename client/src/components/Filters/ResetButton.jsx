import React from "react";
import { useDispatch } from "react-redux";
import {getForFiltersRESET} from "../../middleware/index";
import style from "./ResetButton.module.css";

export default function ResetButton({searchWord}) {
  let dispatch = useDispatch();
  const handleResetFilters = () => {
    dispatch(getForFiltersRESET());

  };

  return (
    <>
      <button className={style.reset_filters} onClick={handleResetFilters}>
        RESET FILTERS
      </button>
    </>
  );
}
