import React, { useCallback, useState, useEffect } from "react";
import citylist from "../json/citylist";
import RecentList from "./RecentList";
import MatchComp from "./RecentList";

export default function Searchbox({
  onQueryUpdate,
  onToggleMenu,
  onToggleModal
}) {
  const [matchList, setMathList] = useState(""),
    [toggle, setToggle] = useState(false),
    [empty, setEmpty] = useState(false),
    [empty02, setEmpty02] = useState(false),
    [city, setCity] = useState(""),
    [input, setInput] = useState(""),
    [arr, setArr] = useState("");


  document.addEventListener("click", function (e) {
    if (e.target.classList.value !== "list") {
      setToggle(false);
    }
  });
  document.addEventListener("blur", function (e) {
    if (e.target !== "a") {
      setEmpty(false);

  document.addEventListener("click",function (e) {
    if (e.target.className ==="search") { //클릭했는데 검색창이면 열려
      setEmpty(true); //열림
    }
    if (e.target.className !== "city" && e.target.className !=="search") {
      setEmpty(false); //닫힘

    }
  });

  let array = [];
  const compareFunc = (_value) => {
    if (_value) {
      //입력 시
      setEmpty02(true);
      var _cityList = citylist.filter(function (element) {
        //해당 단어와 매치된 도시
        var lowerEle = element.name.toLowerCase();
        var lowerVal = _value.toLowerCase();
        return lowerEle.includes(lowerVal);
      });
      if (_cityList) {
        _cityList.map((name) => {
          name = name.name;
          _value = _value.toLowerCase();
          if (name.toLowerCase().startsWith(_value, 0)) {
            array.push(name);
            array = array.filter((element, index) => {
              //중복 제거
              return array.indexOf(element) === index;
            });
          }
        });
        setMathList(array);
      }
    }else{
      setEmpty02(false);
      setMathList('');
    }
  };

  //검색어 칠때 검색어 비교/
  const updateField = (e) => {
    compareFunc(e.target.value);
    setInput(e.target.value);
  };
  //검색어 클릭시 인풋박스 검색어로 세팅.
  const updateFunc = useCallback((e) => {
    setCity(e.target.getAttribute("data-city"));
    setInput(e.target.getAttribute("data-city"));
    setEmpty(false);
  }, []);

<<<<<<< HEAD
  //검색 박스 클릭시 .list 노출
  const inputClick = () => {
    setEmpty(true);
  };
=======
>>>>>>> 76c6567f39f01aa0821e3dfc0efd59fca7d7f0e8
  const btnDelete = (e) => {
    //해당 삭제
    const del_recentItem = e.currentTarget.getAttribute("data-city");
    tempArr = Object.values(recentArr).filter((x) => {
      return x.city !== del_recentItem;
    });
    setArr(tempArr);
    localStorage.setItem("search", JSON.stringify(tempArr));
  };
  const btnAllDelete = () => {
    //해당 삭제
    localStorage.removeItem("search");
    setArr(""); //해야 컴포넌트 리렌더링 된답니다.
  };

  let recentArr = JSON.parse(localStorage.getItem("search"));
  useEffect(() => {
    setArr(JSON.parse(localStorage.getItem("search")));
  }, []);
  let tempArr = []; //임시 배열

  const updateCity = () => {
    let today = new Date();
    let month = today.getMonth() + 1; // 월
    let date = today.getDate(); // 날짜

    for (let key in recentArr) {
      tempArr.push(recentArr[key]);
    }
    if (tempArr.length !== 0) {
      tempArr = Object.values(recentArr).filter((x) => {
        return x.city !== city;
      });
    }

    if (city != null) {
      tempArr.push({ city: city, date: `${month}.${date}` });
    }

    localStorage.setItem("search", JSON.stringify(tempArr));
    setArr(JSON.parse(localStorage.getItem("search")));
    onToggleModal();
    setTimeout(() => {
      onQueryUpdate(city);
      onToggleMenu();
      onToggleModal();
    }, 1500);
  };
  const recentToComponents = (recentArr) => {

    return recentArr.map((arr,i)=>{
      return(
        <RecentList
        updateFunc={updateFunc}
        btnDelete={btnDelete}
        arr={arr}
        btnAllDelete={btnAllDelete}
      />
      )
    })
  }
  const blank02 = (
      <div className="none_wrap">
        최근에 검색한 검색어가 없습니다.
      </div>
  );
  const blank = (
      <div className="none_wrap">
        일치하는 검색어가 없습니다.
        <br />
        검색어를 확인해주세요.
      </div>
  );
  const matchToComponents = (matchArr) => {
    return matchArr.map((arr,i)=>{
      return(
        <MatchComp
          updateFunc={updateFunc}
          btnDelete={btnDelete}
          arr={arr}
          btnAllDelete={btnAllDelete}
        />
      )
    })
  }
  return (
    <div className="search-box">
      <input
        type="text"
        className="search"
        placeholder="Search City ex)Seoul"
        onChange={updateField}
<<<<<<< HEAD
        onClick={inputClick}
=======
>>>>>>> 76c6567f39f01aa0821e3dfc0efd59fca7d7f0e8
        value={input}
        onKeyPress={(e) => {
          e.keyCode === 13 && e.preventDefault();
        }}
      />
      {empty && (
        <div className="list_box">
          {
            !empty02 && (
              <div className="list recent">
                <div className="title">
                  <p>최근검색어</p>
                  <a href="#none" onClick={btnAllDelete}>전체삭제 </a>
                </div>
                {recentArr ?recentToComponents(recentArr) : blank02}
              </div>
            )
          }
          <div className="list">
            {matchList.length > 0  ?  matchToComponents(matchList) : blank }
          </div>
        </div>
      )}
      <button type="button" className="change" onClick={updateCity}>Update </button>
    </div>
  );
}
