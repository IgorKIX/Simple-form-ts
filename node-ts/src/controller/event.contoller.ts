import {Request, Response} from "express";
import {tryToCatch} from "../utils/tryToCatch";
import {createEvent, getAllEvents} from "../service/event.service";
import logger from "../utils/logger";
import {findUser} from "../service/user.service";
import {CreateEventInput} from "../schema/event.schema";

export async function getAllEventsHandler(req: Request, res: Response) {
    const [er, events] = await tryToCatch(getAllEvents, []);

    if (er) {
        logger.error(er);
        return res.status(400).send(er.message);
    }

    return res.send(events)
}

export async function createEventHandler(req: Request<CreateEventInput["body"]>, res: Response) {
    const userId = req.body.userId;
    const body = req.body;
    const [er, user] = await tryToCatch(findUser, [{userId}]);

    if (er) {
        logger.error(er);
        return res.status(404).send(er.message);
    }

    const [err, event] = await tryToCatch(createEvent, [{...body, organizer: user._id}]);

    if (err) {
        logger.error(er);
        return res.status(409).send(er.message);
    }


    return res.send(event);
}