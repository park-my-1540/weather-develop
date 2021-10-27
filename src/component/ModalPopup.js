import React from "react";
import "../scss/modal.scss";
import Loader from "../component/LoadingComp";

export default function ModalPopup() {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="inner-loader">
          <Loader />
        </div>
      </div>
    </div>
  );
}
