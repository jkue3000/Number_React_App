import React from "react";
import "./Numbercard.css"

const Numbercard = props => (
	
    <div>
        <a onClick={() => props.selectPhoto(props.numcard)} className = { props.currentScore === 0 } >
            
            <img class="thumbnail" alt={ props.numcard } src={ props.photo } />

        </a>

    </div>
)

export default Numbercard;