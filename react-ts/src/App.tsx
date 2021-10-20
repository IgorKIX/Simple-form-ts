import "./App.css";
import UserInterface from "./components/UserInterfeace";
import {useContext} from "react";
import {UsersContext} from "./context/userContext";
import {EventContext} from "./context/eventContext";
import EventList from "./components/EventList";

const App = () => {
    const usersList = useContext(UsersContext);
    const eventsList = useContext(EventContext);

    return (
        <>
            {usersList && eventsList ? (
                <main className='main-container'>
                    <div className='interface-box'>
                        <UserInterface/>
                    </div>
                    <div className="list-box">
                        <EventList/>
                    </div>
                </main>
            ) : (
                <div className='loading-container'>Loading...</div>
            )}
        </>
    );
};

export default App;
