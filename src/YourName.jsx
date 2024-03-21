import React from "react";
import { useLocation } from "react-router-dom";

const YourName = () => {
    const location = useLocation();
    return (<h1>Your Name: {location.pathname === "/contacts/1"? "Deviac": "Don't Know"}</h1>)
}

export default YourName;