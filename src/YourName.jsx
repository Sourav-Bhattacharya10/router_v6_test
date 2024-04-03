import React, { useEffect } from "react";
import { useLocation, Route, Routes, useNavigate } from "react-router-dom";
import Greet from "./Greet";

const YourName = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const pathParts = location.pathname.split("/");
    const name = pathParts.includes("1") ? "Deviac": "Don't Know";

    useEffect(() => {
        if(name === "Deviac"){
            navigate("greet")
        }
    }, [name])

    return (
        <>
            <h1>Your Name: {name}</h1>
            <Routes>
                <Route path="greet" element={<Greet name={name}/>} />
            </Routes>
        </>
    )
}

export default YourName;