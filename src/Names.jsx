import React from "react";
import { Routes, Route } from "react-router-dom";
import YourName from "./YourName";

const Names = () => {
    return (
        <>
            <h1>patients names</h1>
            <Routes>
                <Route path=":id/*" element={<YourName />}/>
            </Routes>
        </>
    )
}

export default Names;