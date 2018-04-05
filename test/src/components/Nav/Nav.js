import React from "react";
import "./Nav.css";

const Nav = props => (
    <div>
        <ul className="nav nav-pills">
            <li><a href="/">Count to win!</a></li>
            <li
                className={props.message.indexOf('incorrectly') !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li>
            <li>Score: <span style={{color: "red"}}>{props.userScore}</span> | Top Score: {props.userHighScore}</li>
        </ul>
    </div>
);

export default Nav;
