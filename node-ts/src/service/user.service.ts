import {DocumentDefinition, FilterQuery, QueryOptions} from "mongoose";
import UserModel, {UserDocument} from "../models/user.model";
import {omit} from "lodash";

export async function createUser(input: DocumentDefinition<Omit<UserDocument, "createdAt" | "updatedAt">>) {
    try {
        const user = await UserModel.create(input);

        return omit(user.toJSON(), ["createdAt", "updatedAt"]);
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function getAllUsers() {
    try {
        const users = await UserModel.find();

        return JSON.parse(JSON.stringify(users));
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function findUser(query: FilterQuery<UserDocument>, options: QueryOptions = {lean: true}) {
    try {
        const resultArr = await UserModel.find(query, {}, options);
        return resultArr[0];
    } catch (e: any) {
        throw new Error(e);
    }
}
