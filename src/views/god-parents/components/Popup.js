import React from "react";

import "./popup.css";

const Popup = (props) => {
  return (
    <div className="popup" onClick={() => props.handle()}>
      <span className="popup-background popup-background--dark black"></span>
      <div
        className="popup-content white"
        style={{ maxWidth: "300px" }}
        onClick={(event) => event.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  );
};
export default Popup;
