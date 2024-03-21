import React from "react";
import { Routes, Route } from "react-router-dom";
import YourName from "./YourName";
import FriendName from "./FriendName";

const Names = () => {
    return (
        <Routes>
            <Route path="/1" element={<YourName />}/>
            <Route path="/2" element={<FriendName />}/>
        </Routes>
    )
}

export default Names;