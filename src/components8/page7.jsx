import React from 'react'
import "./page7.css";


const Page7=(props)=>{
    return(

        <div className='card11'>
            <div className="card22">
            <img src={props.imgsrc} id="imgss"></img>
            <h1 id="ss">{props.sname}</h1>
            <h3 id="p7t1">{props.title}</h3>
            <p id="p7t2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>sed do eiusmod tempor incididunt ut labore et dolore <br></br>magna aliqua. Quis ipsum suspendisse ultrices gravida. </p>
            </div>
        </div>
    )
};
export default Page7