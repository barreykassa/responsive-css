import React from "react";
import '../css/home.css';

export default function Home() {
  return (
    <div className="mainDiv" >
      <div className="firstDiv">
        <img 
           className="firstDiv item"
          src="https://cdn.pixabay.com/photo/2022/08/02/04/11/city-7359471__340.jpg"
          alt=""
        />
        <p className="firstDiv item">
          className can either be a string or a function that returns a string.
          If the function className is used, the link’s active state is passed
          as a parameter. This is helpful if you want to exclusively apply a
          className to an inactive link.className can either be a string or a
          function that returns a string. If the function className is used, the
          link’s active state is passed as a parameter. This is helpful if you
          want to exclusively apply a className to an inactive link.
        </p>
      </div>
      <div className="secondDiv">
        <img
         className="secondDiv item"
          src="https://cdn.pixabay.com/photo/2022/08/29/00/31/sunrise-7417746__340.jpg"
          alt=""
        />
        <p className="secondDiv item">
          className can either be a string or a function that returns a string.
          If the function className is used, the link’s active state is passed
          as a parameter. This is helpful if you want to exclusively apply a
          className to an inactive link.className can either be a string or a
          function that returns a string. If the function className is used, the
          link’s active state is passed as a parameter. This is helpful if you
          want to exclusively apply a className to an inactive link.
        </p>
      </div>
    </div>
  );
}
