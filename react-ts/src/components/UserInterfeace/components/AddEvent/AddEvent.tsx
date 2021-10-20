import * as Yup from "yup";
import React, {useContext} from "react";
import AddEventView from "./AddEvent.view";
import {EventContext} from "../../../../context/eventContext";
import {CurrentUserContext} from "../../../../context/currentUserContext";

interface FormUserValues {
    eventName: string;
    eventDate: Date | "";
}

const AddEvent = () => {
    const eventContext = useContext(EventContext);
    const currentUserContext = useContext(CurrentUserContext);

    const onSubmit = (values: FormUserValues) => {
        if (
            currentUserContext &&
            currentUserContext.user &&
            currentUserContext.user._id &&
            eventContext
        ) {
            const eventObj: PreEvent = {
                name: values.eventName,
                date: Date.parse(values.eventDate.toString()),
                userId: currentUserContext.user._id,
            };
            values.eventName = "";

            values.eventDate = "";

            eventContext.addEvent(eventObj);
        }
    };

    const initialValues = {
        eventName: "",
        eventDate: null,
    };

    const validation = Yup.object({
        eventName: Yup.string()
            .max(30, "Must be 30 characters or less")
            .required("Required"),
        eventDate: Yup.string().required("Required").nullable(),
    });

    return (
        <AddEventView
            onSubmit={onSubmit}
            initialValues={initialValues}
            validation={validation}
        />
    );
};

export default AddEvent;
