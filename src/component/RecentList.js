import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default function RecentList({ arr, updateFunc, btnDelete }) {
  return (
        <ul>
          <li>
            <a href="#none" onClick={updateFunc} data-city={typeof arr === "object" ? arr.city : arr}>
              <FontAwesomeIcon icon={faSearch} /> {typeof arr === "object" ? arr.city : arr}
            </a>
            <p>
              {arr.date && (<span>{arr.date}</span>)}
              <a href="#none" onClick={btnDelete} data-city={typeof arr === "object" ? arr.city : arr}>
                {typeof arr == "object" && <FontAwesomeIcon icon={faTimesCircle} />}
                
              </a>
            </p>
          </li>
      </ul>
  );
}
