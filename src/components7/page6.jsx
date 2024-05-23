import React from 'react'
import "./page6.css";


const Page6=(props)=>{
    return(

        <div className='card1' id='About'>
            <div className="card2">
            <img src={props.imgsrc} id="imgs"></img>
            <h1 id="s">{props.sname}</h1>
            <h3 id="p6t1">{props.title}</h3>
            <p id="p6t2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br></br>do eiusmod tempor incididunt ut labore et dolore magna<br></br> aliqua. Quis ipsum suspendisse ultrices gravida. Risus. </p>
            </div>
        </div>
    )
};
export default Page6