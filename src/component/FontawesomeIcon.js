import React from "react";
export default function FontAwesomeIcon(props) {
  let _icon;
  switch (props) {
    case "Clear":
      _icon = "faCloudSun";
      break;
    case "Rain":
      _icon = "faCloudSunRain";
      break;
    case "Clouds":
      _icon = "faCloud";
      break;
    default:
      _icon = "faSun";
  }
  return (
    <i className="ico-item">
      <FontAwesomeIcon icon={_icon} />
    </i>
  );
}
