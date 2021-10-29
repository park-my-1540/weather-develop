// 액션타입, 액션 생성함수, 리듀서
export const toggleMenuOpen = { type: "MENUOPEN" };
export const toggleSettingMenuOpen = { type: "SETTING_MENUOPEN" };
export const toggleModalOpen = { type: "MODALOPEN" };
export const queryUpdate = (city) => ({
  type: "QUERY_UPDATE",
  city
});
export const changeColor = (bg_color) => ({
  type: "CAHNGE_COLOR",
  bg_color
});
export const updateItem = (state) => ({
  type: "ITEM_UPDATE",
  state
});

const initalState = {
  menuOpen: false, //메뉴 토글
  setmenuOpen: false, //세팅메뉴 토글,
  modalOpen: false, // 모달 토글
  bg_color: "bg-blue", //현재 bg Color,
  city: "Seoul", //도시 
  itemState: {
    unit: true, //단위
    atmo: true, //공기질
    sun: true, //일출 일몰
    wind: true //바람세기
  }
};

export default function ui(state = initalState, action) {
  console.log(!state.modalOpen);
  switch (action.type) {
    case "MENUOPEN":
      return {
        ...state,
        menuOpen: !state.menuOpen
      };
    case "SETTING_MENUOPEN":
      return {
        ...state,
        setmenuOpen: !state.setmenuOpen
      };
    case "CAHNGE_COLOR":
      return {
        ...state,
        bg_color: action.bg_color
      };
    case "QUERY_UPDATE":
      return {
        ...state,
        city: action.city
      };
    case "MODALOPEN":
      return {
        ...state,
        modalOpen: !state.modalOpen
      };
    case "ITEM_UPDATE":
      return {
        ...state,
        itemState: action.state
      };
    default:
      return state;
  }
}
