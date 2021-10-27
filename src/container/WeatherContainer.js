import React from "react";
import Weather from "../module/Weather";

import { useSelector } from "react-redux";

export default function MainContainer() {
  const unit = useSelector((state) => state.ui.itemState.unit),
    city_name = useSelector((state) => state.ui.city);

  return (
    <>
      <Weather city_name={city_name} unit={unit} />
    </>
  );
}
