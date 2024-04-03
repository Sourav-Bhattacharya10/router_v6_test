import React from "react";
import { useLocation, useNavigationType, useNavigation } from "react-router-dom";

const FriendName = () => {
    const location = useLocation();
    const navigation = useNavigation();
    const navigationType = useNavigationType();

    console.log("nav : ", navigationType, navigation, location)

    return (<h1>Your Friend Name</h1>)
}

export default FriendName;