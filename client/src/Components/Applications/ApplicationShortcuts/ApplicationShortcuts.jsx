import React from "react";
import PropTypes from "prop-types";
import "./ApplicationShortcuts.scss";
// import { Rnd } from "react-rnd";
import Draggable from "react-draggable";
const Application = (props) => {
  const handleClick = (e) => {
    if (e.detail == 2) window.open(props.url);
  };
  let { pos } = props;
  return (
    <Draggable handle=".img-body" defaultPosition={{ x: pos.x, y: pos.y }}>
      <div className="out-box">
        <div className="box">
          <div
            className="img-body"
            style={{
              background: `url(${props.location})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            onClick={handleClick}
          ></div>
        </div>
        <label>{props.label}</label>
      </div>
    </Draggable>
  );
};

Application.propTypes = {};

export default Application;
