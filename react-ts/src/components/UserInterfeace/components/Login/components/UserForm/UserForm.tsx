import React, {useContext} from "react";
import * as Yup from "yup";
import {CurrentUserContext} from "../../../../../../context/currentUserContext";
import {UsersContext} from "../../../../../../context/userContext";
import UserFormView from "./UserForm.view";

interface UserFormValues {
    firstName: string;
    lastName: string;
    email: string;
}

const UserForm = () => {
    const usersListContext = useContext(UsersContext);
    const currentUserContext = useContext(CurrentUserContext);

    const onSubmit = ({firstName, lastName, email}: UserFormValues) => {
        const userObj: IPreUser = {
            firstName,
            lastName,
            email,
        };

        firstName = "";
        lastName = "";
        email = "";

        usersListContext?.addUser(userObj).then((createdUser) => {
            currentUserContext?.loginUser(createdUser);
        });
    };

    const initValues = {
        firstName: "",
        lastName: "",
        email: "",
    };

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
        lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
    });

    return (
        <UserFormView
            onSubmit={onSubmit}
            initValues={initValues}
            validationSchema={validationSchema}
        />
    );
};

export default UserForm;
