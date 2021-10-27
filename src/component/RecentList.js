import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";




export default function RecentList({ arr, updateFunc, btnDelete }) {
  const item = typeof arr === "object" ? arr.city : arr;

  return (
        <ul>
          <li>
            <a href="#none" onClick={updateFunc} data-city={item}>
              <FontAwesomeIcon icon={faSearch} /> {item}
            </a>
            <p>
              <span>{arr.date}</span>
              <a href="#none" onClick={btnDelete} data-city={item}>
                <FontAwesomeIcon icon={faTimesCircle} />
              </a>
            </p>
          </li>
      </ul>
  );
}
