//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/SecondsCounter.jsx";

//declarando variables
let root = ReactDOM.createRoot(document.getElementById('app'));
let counter=0;
setInterval(function () {
    counter++;
    console.log(counter);
    //render your react application
    root.render(<SecondsCounter digit1={counter}/>);
}, 1000);
