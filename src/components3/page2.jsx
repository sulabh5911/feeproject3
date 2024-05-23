import React from "react";
import "./page2.css"


function Card(props){

    console.log("imgsrc:", props.imgsrc);
    console.log("title:", props.title);
    console.log("sname:", props.sname);
    return(
        <>
        <div className="cards">
            <div className="card">
                <img src={props.imgsrc}  className="card_img"></img>
                <div className="card_info">
                <span className="card_category">
                    {props.title}
                </span>
                <h3 className="card_title">{props.sname}</h3>
                </div>
            </div>
        </div>
    </>
    )
}

export default Card
