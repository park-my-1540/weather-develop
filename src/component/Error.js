import React from "react";
import "../scss/modal.scss";

export default function Error() {
  return (
    <div className="errorm-container">
      <div className="modal-content">
        <div className="inner-loader">검색된 결과가 없습니다.</div>
        <button type="button">메인으로 돌아가기</button>
      </div>
    </div>
  );
}
