# weather react APP - develop ver

날씨 조회 및 위치 선택해서 재조회 가능

## URL
https://park-my-1540.github.io/weather-develop

## 기능

**메인** : 선택한 도시 위치 값으로 날씨 노출됨 (초기값은 서울) <BR/> <BR/>
**위젯 (하단 화살표버튼)** : 공기질, 일출/일몰, 풍향, 9일치 날씨 노출 (세팅메뉴에서 옵션 노출/미노출 선택 가능)<br/> <BR/>
**세팅 메뉴 위젯(햄버거버튼)** : <br/><BR/>
&nbsp;&nbsp;1) 도시검색 : 최근검색/ 검색 도시 노출 , 조회하고싶은 도시는 UPDATE 버튼 으로 조회 <BR/> 
&nbsp;&nbsp;2) 위젯노출 옵션 선택 : 선택 후 SAVE버튼으로 저장<BR/>
&nbsp;&nbsp;3) 테마 선택 가능 : 선택 후 SAVE버튼으로 저장<BR/>

### `API`

openweather 날씨 데이터 가져옴 <br/>
https://home.openweathermap.org/api_keys

IPSTACK IP를 이용하여 위치 도시 값 가져옴<br/>
https://ipstack.com/quickstart

### `폴더 관리`
**Component : 프레젠테이션 컴포넌트**<br/>
**Container : 리덕스 상태 조회/액션 디스패치**<br/>
**module : 액션 타입 선언/ 액션 생성함수**

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


### `사용한 라이브러리`
axios<br/>
gsap<br/>
react-id-swiper<br/>
redux<br/>
react-redux<br/>
sass<br/>
swiper<br/>
fontawesome
