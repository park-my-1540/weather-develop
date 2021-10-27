import React from "react";
import "../scss/loading.scss";

const loadingComp = () => {
  return (
    <>
      <div className="loader">
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--dot"></div>
        <div className="loader--text"></div>
      </div>
    </>
  );
};

export default React.memo(loadingComp);
