import React, { useRef, useEffect } from "react";
import MainComp from "../component/MainComp";
import SettingMenuComp from "../component/SettingMenuComp";
import Modal from "../component/ModalPopup";
import {
  funcOn,
  funcTween,
  funcTweenReverse,
  showChangeBox
} from "../module/useUi";
import {
  toggleSettingMenuOpen,
  toggleMenuOpen,
  queryUpdate,
  toggleModalOpen,
  changeColor,
  updateItem
} from "../module/ui";
import { useSelector, useDispatch } from "react-redux";

export default function SubContainer({ wstate, fetchData }) {
  const dispatch = useDispatch(),
    menuOpen = useSelector((state) => state.ui.menuOpen),
    modalOpen = useSelector((state) => state.ui.modalOpen),
    setmenuOpen = useSelector((state) => state.ui.setmenuOpen),
    currentTheme = useSelector((state) => state.ui.bg_color),
    item_state = useSelector((state) => state.ui.itemState),
    unit = useSelector((state) => state.ui.itemState.unit);

  const  onQueryUpdate = (city) => dispatch(queryUpdate(city)),
         onToggleModal = () => dispatch(toggleModalOpen),
         onToggleMenu = () => dispatch(toggleSettingMenuOpen),
         onItemUpdate = (state) => dispatch(updateItem(state)),
         onChangeColor = (selectBg) => dispatch(changeColor(selectBg));

  //세팅메뉴 변수
  const _setmenuRef = useRef(null),
    stMenuTween = useRef(null);
  //메인 페이지 변수
  const _pageRef = useRef(null),
    pageTween = useRef(null);

  //위젯, 메뉴 변수
  const _menuRef = useRef(null),
    menuTween = useRef(null),
    _mainRef = useRef(null),
    mainWidgetTween = useRef(null);

  const openSetWidget = () => {
    showChangeBox(currentTheme);
    if (setmenuOpen) {
      stMenuTween.current.progress(1).reverse();
      pageTween.current.progress(1).reverse();
    } else {
      stMenuTween.current.play();
      pageTween.current.play();
    }
    dispatch(toggleSettingMenuOpen); //토글 바뀜
  };

  const openWidget = (e) => {
    funcOn(e.target.closest(".btn-menu-widget"));
    if (menuOpen) {
      menuTween.current.progress(1).reverse();
      mainWidgetTween.current.progress(1).reverse();
    } else {
      menuTween.current.play();
      mainWidgetTween.current.play();
    }
    dispatch(toggleMenuOpen); //토글 바뀜
  };

  useEffect(() => {
    const height = Math.round(
      document.querySelector(".menu-widget").offsetHeight
    );
    menuTween.current = funcTween(this, _menuRef.current, 0, height, 0.5);
    menuTween.current.pause(); // 두번작돋 방지
  }, [item_state]);

  useEffect(() => {
    stMenuTween.current = funcTweenReverse(
      this,
      _setmenuRef.current,
      -394,
      0,
      0.5
    );
    stMenuTween.current.pause();

    mainWidgetTween.current = funcTweenReverse(
      this,
      _mainRef.current,
      -100,
      -225,
      0.5
    );
    mainWidgetTween.current.pause(); // 두번작돋 방지
    pageTween.current = funcTweenReverse(
      this,
      _pageRef.current,
      40,
      0,
      0.3,
      0.9
    );
    pageTween.current.pause(); // 두번작돋 방지
  }, []);
  useEffect(() => {
    showChangeBox(currentTheme);
  }, [currentTheme]);

  return (
    <>
      <MainComp
        _mainRef={_mainRef}
        _pageRef={_pageRef}
        openSetWidget={openSetWidget}
        wstate={wstate}
        openWidget={openWidget}
        _menuRef={_menuRef}
        fetchData={fetchData}
        item_state={item_state}
        unit={unit}
        dispatch={dispatch}
        onToggleMenu={onToggleMenu}
      />
      <SettingMenuComp
        _setmenuRef={_setmenuRef}
        openSetWidget={openSetWidget}
        fetchData={fetchData}
        item_state={item_state}
        currentTheme={currentTheme}
        dispatch={dispatch}
        onQueryUpdate={onQueryUpdate}
        onToggleModal={onToggleModal}
        onToggleMenu={onToggleMenu}
        onChangeColor={onChangeColor}
        onItemUpdate={onItemUpdate}
      />
      Design reference codepenio Stefan Tudoran
      {modalOpen && <Modal />}
    </>
  );
}
