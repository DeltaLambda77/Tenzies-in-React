import React from "react"

export default function Die(props) {
    return (
        <div className={props.isHeld ? "die-face-green" : "die-face"} onClick={props.holdDice}>
            <h2 className="die-number">{props.value}</h2>
        </div>
    )
} 