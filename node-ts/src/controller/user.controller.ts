import {Request, Response} from "express";
import logger from "../utils/logger";
import {createUser, getAllUsers} from "../service/user.service";
import {CreateUserInput} from "../schema/user.schema";
import {tryToCatch} from "../utils/tryToCatch";

export async function createUserHandler(
    req: Request<{}, {}, CreateUserInput["body"]>,
    res: Response,
) {
    const [er, user] = await tryToCatch(createUser, [req.body]);

    if (er) {
        logger.error(er);
        return res.status(409).send(er.message);
    }

    return res.send(user);
}

export async function getAllUsersHandler(req: Request, res: Response) {
    const [er, users] = await tryToCatch(getAllUsers, []);

    if (er) {
        logger.error(er);
        return res.status(400).send(er.message);
    }

    return res.send(users);
}