import React, { useContext } from "react";
import { CurrentUserContext } from "../../context/currentUserContext";
import Login from "./components/Login";

const UserInterface = () => {
  const currentUserContext = useContext(CurrentUserContext);
  return <>{currentUserContext?.user ? <div>AddEvent</div> : <Login />}</>;
};

export default UserInterface;
