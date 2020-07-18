import React, { useState, Component } from "react";
import { withRouter } from "react-router-dom";

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
        <props.Component key={"component"} />
      </div>
    </div>
  );
};
export default Popup;
