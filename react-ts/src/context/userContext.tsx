import React, {ReactNode, useEffect, useState} from "react";
import userService from "../service/user.service";

type Props = {
    children: ReactNode;
};

export const UsersContext = React.createContext<TUsersContext | null>(null);

const UsersProvider = ({children}: Props) => {
    const [users, setUsers] = useState([] as IUser[]);

    useEffect(() => {
        userService
            .getAll()
            .then((initialUsersList) => {
                if (Array.isArray(initialUsersList)) {

                    console.log("Initial users list from backend: ", initialUsersList);
                    setUsers(initialUsersList);
                    return;
                }
                console.error(
                    "Error during getting the data about users from the server"
                );
            })
            .catch((err) => {
                setUsers([]);
                console.error(err);
            });
    }, []);

    const addUser = (user: IPreUser): Promise<IUser> => {
        return userService
            .create(user)
            .then((createdUser) => {
                console.log("Created user: ", createdUser);
                setUsers([...users, createdUser]);
                return createdUser;
            })
            .catch((err) => {
                console.error(err);
                return err
            });
    };

    return (
        <UsersContext.Provider value={{users, addUser}}>
            {children}
        </UsersContext.Provider>
    );
};

export default UsersProvider;
