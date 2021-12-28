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

### `사용한 라이브러리`
axios<br/>
gsap<br/>
react-id-swiper<br/>
redux<br/>
react-redux<br/>
sass<br/>
swiper<br/>
fontawesome

### `통신 프로세스`
1. WeaherContainer에서 weahter에 city, unit 넘김
2. Weaher에서 비동기 함수 getData 호출 : api 값 받아와서 data에 넣어두는 함수 (getData에서는 Promise ..then...catch 이용해서 api 통신)
3. useAsync를 이용해 api통신 로딩/성공/실패 로 관리 : getData 콜백함수로 넘김 
4. useAsync에서 fetchData 실행 : 콜백으로 넘긴 getData 에 값 들어온후 성공/오류/로딩 상태변경
5. 성공후 data와 fetchData 함수 return
6. return 된 값 wstate에 저장.
7. MainContainer에 전달
