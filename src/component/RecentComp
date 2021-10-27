import React, { useCallback, useState, useEffect } from "react";
import {
  queryUpdate,
  toggleModalOpen,
  toggleSettingMenuOpen
} from "../module/ui";
import citylist from "../json/citylist";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import RecentList from "./RecentList";

export default function RecentComp({
    updateField,
    inputClick,
    input
}) {

  useEffect(() => {
    setArr(JSON.parse(localStorage.getItem("search")));
  }, []);
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search City ex)Seoul"
        onChange={updateField}
        onClick={inputClick}
        value={input}
        onKeyPress={(e) => {
          e.keyCode === 13 && e.preventDefault();
        }}
      />
    </div>
  );
}
