import React from "react";
// import { useLocation, Route, Routes, useNavigate, Navigate } from "react-router-dom";

const Greet = (props) => {
    // const location = useLocation();
    console.log("history: ", history)
    return (<h2>Welcome to React Router V6 {props.name}</h2>)
}

export default Greet;