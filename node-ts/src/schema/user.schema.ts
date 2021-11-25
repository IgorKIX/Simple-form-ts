import {object, string, TypeOf} from "zod";

export const createUserSchema = object({
    body: object({
        firstName: string({
            required_error: "firstName is required"
        }).max(15, "firstName must be less than 16 characters"),
        lastName: string({
            required_error: "lastName is required"
        }).max(20, "lastName must be less than 21 characters"),
        email: string({
            required_error: "email is required"
        }).email("Not a valid email"),
    })
});

export type CreateUserInput = TypeOf<typeof createUserSchema>;