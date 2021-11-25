import mongoose from "mongoose";
import {UserDocument} from "./user.model";

export interface EventDocument extends mongoose.Document {
    name: string;
    date: Date;
    organizer: UserDocument["_id"];
    createdAt: Date;
    updatedAt: Date;
}

const eventsSchema = new mongoose.Schema({
        name: {type: String, required: true},
        date: {type: Date, required: true},
    organizer: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    },
    {
        timestamps: true,
    });

const EventModel = mongoose.model<EventDocument>("Event", eventsSchema);

export default EventModel;