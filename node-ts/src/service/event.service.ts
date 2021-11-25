import EventModel, {EventDocument} from "../models/event.model";
import {DocumentDefinition} from "mongoose";
import {omit} from "lodash";

export async function getAllEvents() {
    try {
        const events = await EventModel.find();

        return JSON.parse(JSON.stringify(events));
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function createEvent(input: DocumentDefinition<Omit<EventDocument, "createdAd" | "updatedAd" | "_id">>) {
    try {
        const event = await EventModel.create(input);
        return omit(event.toJSON(), ["createdAt", "updatedAt"]);
    } catch (e: any) {
        throw new Error(e);
    }
}