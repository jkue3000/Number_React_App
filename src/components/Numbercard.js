import React from "react";
import "./Numbercards.css"

const Numbercards = props => (
    <div>
        <a onClick={() => props.selectPhoto(props.numbercard)} className = { props.currentScore === 0 } >
            <img class="thumbnail" alt={ props.numbercard } src={ props.image } />
        </a>
    </div>
)

export default Numbercards;