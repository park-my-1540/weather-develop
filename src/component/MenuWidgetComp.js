import React from "react";
import "../scss/menuWidget.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTint,
  faSmog,
  faWeight,
  faSun,
  faClock,
  faThermometerQuarter,
  faCompass,
  faWind,
  faCloud,
  faCloudSun,
  faCloudSunRain,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";

import SwiperItem from "./SwiperItem";
/*
  MenuWidgetComp : item_state 옵션 상태 값에 따라 아이템 항목 노출/미노출
*/
function MenuWidgetComp({ _menuRef, openWidget, wstate, item_state }) {
  const data = wstate.data[0];
  const data_forecast = wstate.data[0].forecastArray;
  return (
    <>
      <div className="widget-container" ref={_menuRef}>
        <a href="#none" className="btn-menu-widget" onClick={openWidget}>
          <FontAwesomeIcon icon={faChevronDown} />
        </a>
        <div className="menu-widget">
          <ul>
            {item_state.atmo && (
              <li>
                <p className="row-tit">Atmospheric Conditions</p>
                <div className="row-menu">
                  <div className="item-menu">
                    <i className="ico-item">
                      <FontAwesomeIcon icon={faTint} />
                    </i>
                    <p>
                      Humidity <br />
                      {data.humidity} %
                    </p>
                  </div>
                  <div className="item-menu">
                    <i className="ico-item">
                      <FontAwesomeIcon icon={faWeight} />
                    </i>
                    <p>
                      Pressure <br />
                      {data.pressure} hPa
                    </p>
                  </div>
                  <div className="item-menu">
                    <i className="ico-item">
                      <FontAwesomeIcon icon={faSmog} />
                    </i>
                    <p>
                      Visibility <br />
                      {data.visibility} m
                    </p>
                  </div>
                </div>
              </li>
            )}
            {item_state.sun && (
              <li>
                <p className="row-tit">Sunrise/Sunset</p>
                <div className="row-menu">
                  <div className="item-menu">
                    <i className="ico-item">
                      <FontAwesomeIcon icon={faSun} />
                    </i>
                    <p>
                      Sunrise <br />
                      {data.sunrise}
                    </p>
                  </div>
                  <div className="item-menu">
                    <i className="ico-item">
                      <FontAwesomeIcon icon={faCloud} />
                    </i>
                    <p>
                      Clouds <br />
                      {data.cloud}
                    </p>
                  </div>
                  <div className="item-menu">
                    <i className="ico-item">
                      <FontAwesomeIcon icon={faClock} />
                    </i>
                    <p>
                      Sunset <br />
                      {data.sunset}
                    </p>
                  </div>
                </div>
              </li>
            )}
            {item_state.wind && (
              <li>
                <p className="row-tit">Wind Conditions</p>
                <div className="row-menu">
                  <div className="item-menu">
                    <i className="ico-item">
                      <FontAwesomeIcon icon={faThermometerQuarter} />
                    </i>
                    <p>
                      Feels like <br />
                      {data.feels_like} ºC
                    </p>
                  </div>
                  <div className="item-menu">
                    <i className="ico-item">
                      <FontAwesomeIcon icon={faCompass} />
                    </i>
                    <p>
                      Direction <br />
                      {data.wind_dir} deg
                    </p>
                  </div>
                  <div className="item-menu">
                    <i className="ico-item">
                      <FontAwesomeIcon icon={faWind} />
                    </i>
                    <p>
                      Speed <br />
                      {data.wind_speed} m/s
                    </p>
                  </div>
                </div>
              </li>
            )}
            <li>
              <p className="row-tit">8 Days Forecast</p>
              <div className="row-menu swiper">
                <SwiperItem data_forecast={data_forecast} />
              </div>
            </li>
          </ul>
        </div>
        {/* //main-widget */}
      </div>
    </>
  );
}
export default React.memo(MenuWidgetComp);
