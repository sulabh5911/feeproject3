import React from "react";
import ReactDOM from "react-dom";
import Card from "./page2.jsx"

import { pic } from "../utils";

export default function Cards() {
  return (
    <div  className="container" id="Shop">
      {pic.map((el) => (
        <Card key={el.id} imgsrc={el.img} title={el.title} sname={el.sname} />
      ))}
    </div>
  );
}
