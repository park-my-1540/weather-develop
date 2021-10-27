import React, { useEffect } from "react";
import "../scss/menuWidget.scss";
import Swiper from "react-id-swiper";
import "../scss/swiper.css";
import { setIcon } from "../module/useUi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTint,
  faSmog,
  faWeight,
  faClock,
  faThermometerQuarter,
  faCompass,
  faWind,
  faSun,
  faCloud,
  faCloudSun,
  faCloudSunRain,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { library } from "@fortawesome/fontawesome-svg-core";
const SwiperItem = ({ data_forecast }) => {
  const params = {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      clickable: true
    }
  };
  library.add(faSun, faCloudSun, faCloudSunRain, faCloud);
  return (
    <>
      <Swiper {...params}>
        {data_forecast.map((data, index) => (
          <div className="item-menu" key={index}>
            <i className="ico-item">
              <FontAwesomeIcon icon={setIcon(data.main)} />
            </i>
            <p>
              {data.main} <br />
              {data.max}/{data.min}
            </p>
          </div>
        ))}
      </Swiper>
    </>
  );
};
export default SwiperItem;
