import React, { useEffect, useState } from "react";
import "../scss/SettingMenu.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faCog,
  faCheck,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";
import { showChangeBox } from "../module/useUi";
import Searchbox from "./Searchbox";
export default function SettingMenuComp({
  _setmenuRef,
  openSetWidget,
  fetchData,
  item_state,
  currentTheme,
  onQueryUpdate,
  onToggleMenu,
  onToggleModal,
  onChangeColor,
  onItemUpdate
}) {

  //임시 변수 : 테마색, 아이템 store state에 넘기기 전 임시 상태값
  const [tempColor, setTempColor ] = useState('');

  useEffect(() => { //초기화
    setTempColor(currentTheme)

    const _checkbox = document.querySelectorAll(".slider");
    const _bg_box = document.querySelector(".theme-box").querySelectorAll("a");

    _checkbox.forEach((el) => {
      const item_id = el.previousSibling.id;
      if (item_state[item_id]) {
        el.classList.add("on");
      }

      el.addEventListener("click", (e) => { 
        e.preventDefault();
        e.target.closest(".slider").classList.toggle("on");
      });

      _bg_box.forEach((box) => { //모든 bg_box에 이벤트를 걸기
        box.addEventListener("click", (e) => {
          _bg_box.forEach((el) => {
            el.classList.remove("on");
          });
          box.classList.add("on");
        });
      });
      document
        .querySelector(".theme-box")
        .querySelector(`.${currentTheme}`)
        .classList.add("on");
    });
  }, []);

  const boxSetting = () => {
    const _bg_box = document.querySelector(".theme-box").querySelectorAll("a");
    _bg_box.forEach((box) => {
      box.classList.remove("on");
    });
    document
      .querySelector(".theme-box")
      .querySelector(`.${currentTheme}`)
      .classList.add("on");
  };

  let selectBg;
  const changeTheme = (e) => {
    selectBg = e.target.classList[0];
    showChangeBox(selectBg); //테마박스 변경
    setTempColor(selectBg); // 
  };
  
  /**
   * changeItem : 선택한 옵션값 저장해서 onItemUpdate로 넘겨줌
   */
  const changeItem = () => {
    const _checkbox = [...document.getElementsByClassName("slider")];
    let tempItem = {};
    _checkbox.map(function(item, index, array){
      if(item.classList.contains("on")){
        tempItem={
          ...tempItem,
          ...{[item.previousSibling.id] : true}
        }
      }else{
        tempItem={
          ...tempItem,
          ...{[item.previousSibling.id] : false}
        }
      }
    });
    return tempItem;
  };

  /*
    saveFunc : 옵션 저장 후  액션생성 함수들에 넘김
  */
  const saveFunc = () => { 
    onToggleModal();
    onChangeColor(tempColor);
    onItemUpdate(changeItem());
    setTimeout(() => { //모달 열렸다가 닫힘 fake
      onToggleModal();
    }, 1500);
  };

  return (
    <>
      <div className="setting-container" ref={_setmenuRef}>
        <div className="setting-header">
          <h2><i className="ico-item"><FontAwesomeIcon icon={faCog} /></i>Settings</h2>
          <a
            href="#none"
            className="btn-setting-close"
            onClick={() => {
              openSetWidget();
              boxSetting();
            }}
          >
            <FontAwesomeIcon icon={faTimesCircle} />
          </a>
        </div>
        {/* //setting-header */}
        <div className="setting-content">
          <Searchbox
            fetchData={fetchData}
            tempColor={selectBg}
            onQueryUpdate={onQueryUpdate}
            onToggleModal={onToggleModal}
            onToggleMenu={onToggleMenu}
          />
          <ul className="setting-list">
            <li className="item">
              <div className="item-box">
                <p className="item-tit">Tempearature Unit</p>
                <label className="switch" htmlFor="unit">
                  <input type="checkbox" id="unit" />
                  <a href="#none" className="slider">
                    <p className="left">°C</p>
                    <p className="right">°F</p>
                  </a>
                </label>
              </div>
              <p className="sub_desc">Choose between ºC or ºF.</p>
            </li>

            <li className="item">
              <div className="item-box">
                <p className="item-tit">Atmospheric Conditions</p>
                <label className="switch" htmlFor="atmo">
                  <input type="checkbox" id="atmo" />
                  <a href="#none" className="slider">
                    <p className="left">
                      <FontAwesomeIcon icon={faCheck} />
                    </p>
                    <p className="right">
                      <FontAwesomeIcon icon={faTimes} />
                    </p>
                  </a>
                </label>
              </div>
              <p className="sub_desc">Humidity, pressure and visibility of the atmosphere.</p>
            </li>
            <li className="item">
              <div className="item-box">
                <p className="item-tit">Sunrise/Sunset</p>
                <label className="switch" htmlFor="sun">
                  <input type="checkbox" id="sun" />
                  <a href="#none" className="slider">
                    <p className="left">
                      <FontAwesomeIcon icon={faCheck} />
                    </p>
                    <p className="right">
                      <FontAwesomeIcon icon={faTimes} />
                    </p>
                  </a>
                </label>
              </div>
              <p className="sub_desc">Sunset/Sunrise hours and total hours of light.</p>
            </li>
            <li className="item">
              <div className="item-box">
                <p className="item-tit">Wind Conditions</p>
                <label className="switch" htmlFor="wind">
                  <input type="checkbox" id="wind" />
                  <a href="#none" className="slider">
                    <p className="left">
                      <FontAwesomeIcon icon={faCheck} />
                    </p>
                    <p className="right">
                      <FontAwesomeIcon icon={faTimes} />
                    </p>
                  </a>
                </label>
              </div>
              <p className="sub_desc">Chill, direction and the speed of the wind.</p>
            </li>
            <li className="item">
              <div className="item-box type-block">
                <p className="item-tit">Choose a theme</p>
                <div className="theme-box">
                  <a href="#none" className="bg-green" onClick={changeTheme}>
                    <span>초록</span>
                  </a>
                  <a href="#none"className="bg-lightblue" onClick={changeTheme}>
                    <span>라이트블루</span>
                  </a>
                  <a href="#none" className="bg-blue" onClick={changeTheme}>
                    <span>블루</span>
                  </a>
                  <a href="#none" className="bg-purple" onClick={changeTheme}>
                    <span>보라</span>
                  </a>
                </div>
              </div>
              <p className="sub_desc">
                Select the desired theme. Press the "Save" button to update the
                theme!
              </p>
            </li>
          </ul>
          {/* //setting-list */}
          <div className="btn-wrap">
            <button type="button" className="change" onClick={saveFunc}>Save</button>
          </div>
        </div>
      </div>
    </>
  );
}
