# weather react APP - develop ver

날씨 조회 및 위치 선택해서 재조회 가능

## URL
https://park-my-1540.github.io/weather-develop

## 기능

메인 : 현재 위치 값으로 조회 (현재 날씨 정보 , 6일 날씨) <BR/>
위젯 : 

### `API`

openweather 날씨 데이터 가져옴 <br/>
https://home.openweathermap.org/api_keys

IPSTACK IP를 이용하여 위치 도시 값 가져옴<br/>
https://ipstack.com/quickstart

googleMap : 구글 지도 가져옴/ 마커 찍어줌<br/>
https://developers.google.com/maps/documentation/javascript/geolocation?hl=ko

### `state 관리`
redux 관리<br/>
state ={<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;menuOpen: false, 메뉴 토글 <Br/>
  &nbsp;&nbsp;&nbsp;&nbsp;setmenuOpen: false, 세팅메뉴 토글,<Br/>
  &nbsp;&nbsp;&nbsp;&nbsp;modalOpen: false,  모달 토글<Br/>
  &nbsp;&nbsp;&nbsp;&nbsp;bg_color: "bg-blue", 현재 bg Color,<Br/>
  &nbsp;&nbsp;&nbsp;&nbsp;city: "Seoul", 도시 <Br/>
  &nbsp;&nbsp;&nbsp;&nbsp;itemState: {<Br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;unit: true, 단위<Br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;atmo: true, 공기질<Br/>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sun: true, 일출 일몰<Br/>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;wind: true 바람세기<Br/>
   &nbsp;&nbsp;&nbsp;&nbsp;}<Br/>


scss
redux
react- redux

서버사이드 렌더링 안해볼래?
### `사용한 라이브러리`
axios<br/>
gsap<br/>
react-id-swiper<br/>
redux<br/>
react-redux<br/>
sass<br/>
swiper<br/>
fontawesome
