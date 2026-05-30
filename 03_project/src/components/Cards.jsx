import React from "react";

const Card = (props) => {
    return (
        <div className="Card">
            <div className="top">
                <img src={props.logo} alt="" />
                <button>Save <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=bookmark" /></button>
            </div>
            <div className="center">
                <div className="c-1">
                    <h3>{props.company}</h3> <p>{props.time} ago</p>
                </div>
                <div className="c-2">
                    {props.position}
                </div>
                <div className="c-3">
                    <button>{props.b1}</button>
                    <button>{props.b2}</button>
                </div>
            </div>
            <div className="bottom">
                <div className="rate">
                    <p id="rate">{props.rate}</p>
                    <p id="location">{props.place}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    )
}

export default Card;