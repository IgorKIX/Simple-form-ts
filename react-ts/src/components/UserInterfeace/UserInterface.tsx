import React, { useContext } from "react";
import { CurrentUserContext } from "../../context/currentUserContext";
import Login from "./components/Login";
import AddEvent from "./components/AddEvent";

const UserInterface = () => {
  const currentUserContext = useContext(CurrentUserContext);
  return <>{currentUserContext?.user ? <AddEvent /> : <Login />}</>;
};

export default UserInterface;
