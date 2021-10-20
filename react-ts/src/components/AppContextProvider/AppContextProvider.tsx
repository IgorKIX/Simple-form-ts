import {CurrentUserProvider} from "../../context/currentUserContext";
import EventsProvider from "../../context/eventContext";
import UsersProvider from "../../context/userContext";

type Props = {
    children: React.ReactNode;
};

const AppContextProvider = ({children}: Props) => {
    return (
        <UsersProvider>
            <EventsProvider>
                <CurrentUserProvider>{children}</CurrentUserProvider>
            </EventsProvider>
        </UsersProvider>
    );
};

export default AppContextProvider;
