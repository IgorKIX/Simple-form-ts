import React, {useContext} from "react";
import "./UsersList.css";
import {UsersContext} from "../../../../../../context/userContext";
import {CurrentUserContext} from "../../../../../../context/currentUserContext";

const UsersList = () => {
    const usersListContext = useContext(UsersContext);
    const currentUserContext = useContext(CurrentUserContext);

    const setUserAsCurrent = (user: IUser) => {
        currentUserContext?.loginUser(user);
    };

    const renderUsers = () => {
        return usersListContext?.users.map((user) => {
            const {_id, firstName, lastName, email} = user;
            const userInfo = [firstName, lastName, email].join(" ");
            return (
                <button
                    key={_id}
                    className='user-btn'
                    onClick={() => setUserAsCurrent(user)}
                >
                    {userInfo}
                </button>
            );
        });
    };

    return (
        <div className="user-list-container">
            <h2 id="title">Users:</h2>
            <div className="users-list">{renderUsers()}</div>
        </div>
    );
};

export default UsersList;
