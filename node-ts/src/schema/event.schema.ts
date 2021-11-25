import {number, object, string, TypeOf} from "zod";

export const createEventSchema = object({
    body: object({
        name: string({
            required_error: "name is required"
        }).max(30, "name must be less than 31 characters"),
        date: number({
            required_error: "date is required"
        }),
        userId: string({
            required_error: "userId is required"
        }),
    })
});

export type CreateEventInput = TypeOf<typeof createEventSchema>;