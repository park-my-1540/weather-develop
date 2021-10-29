import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCloudSun } from "@fortawesome/free-solid-svg-icons";
import "../scss/main.scss";
import MenuComp from "./MenuWidgetComp";
export default function MainComp({
  _mainRef,
  _menuRef,
  _pageRef,
  openWidget,
  openSetWidget,
  wstate,
  item_state,
  unit,
  menuOpen
}) {
  const data = wstate.data[0];
  let dateString = useRef();
  useEffect(() => {
    setDate();
  }, [dateString]);

  const setDate = () => {
    let today = new Date(),
        year = today.getFullYear(), // 년도
        month = today.getMonth() + 1, // 월
        date = today.getDate(); // 날짜
       dateString.current = `${month}.${date}.${year}`;
       return `${month}.${date}.${year}`;
  };
  return (
    <>
      <div className="main change" ref={_pageRef}>
        <header>
          <div className="inner">
            <div className="info-box">
              <p className="loc">
                <i className="ico-map">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </i>
                {data.city}
              </p>
              <p className="day">{setDate()}</p>
            </div>
            <a href="#none" className="btn-setting-menu" onClick={openSetWidget}><span></span><span></span> <span></span></a>
          </div>
        </header>
        <div
          className={menuOpen ? "main-widget on" : "main-widget"}
          ref={_mainRef}
        >
          <div>
            {data.main}
            <i className="ico-sun">
              <FontAwesomeIcon icon={faCloudSun} />
            </i>
          </div>
          <p className="temp">
            {data.temp}
            <span className="">{unit ? "ºC" : "°F"}</span>
          </p>
        </div>
        <MenuComp
          _menuRef={_menuRef}
          openWidget={openWidget}
          wstate={wstate}
          item_state={item_state}
        />
      </div>
    </>
  );
}
