import { TweenMax } from "gsap";

export const funcOn = (ele) => {
  ele.classList.toggle("on");
};
export const setIcon = (props) => {
  let _icon;
  switch (props) {
    case "Clear":
      _icon = "cloud-sun";
      break;
    case "Rain":
      _icon = "cloud-sun-rain";
      break;
    case "Clouds":
      _icon = "cloud";
      break;
    default:
      _icon = "sun";
  }
  return _icon;
};
export function funcTween(_widget, _target, _x = 0, _y = 0, _dur, _scale = 1) {
  _widget = TweenMax.fromTo(
    _target,
    _dur,
    {
      x: _x,
      y: _y,
      scale: 1
    },
    {
      x: 0,
      y: 0,
      scale: _scale
    }
  );
  return _widget; //mainWidget.current
}
export function funcTweenReverse(
  _widget,
  _target,
  _x = 0,
  _y = 0,
  _dur,
  _scale = 1
) {
  _widget = TweenMax.fromTo(
    _target,
    _dur,
    {
      x: 0,
      y: 0,
      scale: 1
    },
    {
      x: _x,
      y: _y,
      scale: _scale
    }
  );
  return _widget; //mainWidget.current
}

export const funcTheme = (currentTheme) => {
  let $bg_color;
  switch (currentTheme) {
    case "bg-green":
      $bg_color = "linear-gradient(135deg, #bcec68 -20%, #0eb9a4 120%)";
      break;
    case "bg-lightblue":
      $bg_color = "linear-gradient(135deg, #5de2ff -20%, #08bb8a 120%)";
      break;
    case "bg-blue":
      $bg_color = "linear-gradient(135deg, #80ecf7 -20%, #706aff 120%)";
      break;
    case "bg-purple":
      $bg_color = "linear-gradient(135deg, #f572c1 -20%, #6a37ab 120%)";
      break;
    default:
      $bg_color = "linear-gradient(135deg, #bcec68 -20%, #0eb9a4 120%)";
  }
  return $bg_color;
};
export const showChangeBox = (theme) => {
  //change , slider bg-theme가 바뀔때마다 같이 변경
  const changeComp = document.querySelectorAll(".change");
  changeComp.forEach((c) => {
    c.style.background = funcTheme(theme);
  });
  const onSlider = document.querySelectorAll(".slider");
  onSlider.forEach((c) => {
    c.classList.remove("bg-green", "bg-blue", "bg-lightblue", "bg-purple");
    c.classList.add(`${theme}`);
  });
};
