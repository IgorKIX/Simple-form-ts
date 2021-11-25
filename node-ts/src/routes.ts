import {Express, Request, Response} from "express";
import validateResources from "./middleware/validateResources";
import {createUserSchema} from "./schema/user.schema";
import {createUserHandler, getAllUsersHandler} from "./controller/user.controller";
import {createEventHandler, getAllEventsHandler} from "./controller/event.contoller";
import {createEventSchema} from "./schema/event.schema";

const routes = (app: Express) => {
    app.get("/alive", (req: Request, res: Response) => {
        res.sendStatus(200);
    });

    // users
    app.get("/users", getAllUsersHandler);
    app.post("/users", validateResources(createUserSchema), createUserHandler);

    // events
    app.get("/events", getAllEventsHandler);
    app.post("/events", validateResources(createEventSchema), createEventHandler);
}

export default routes;