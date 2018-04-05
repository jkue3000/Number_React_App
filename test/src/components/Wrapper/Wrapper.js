import React from "react";
import "./Wrapper.css";

// need to send this to html to show other objects inside
const Wrapper = props => <div className="wrapper">{props.children}</div>;

export default Wrapper;