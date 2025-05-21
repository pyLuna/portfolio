import { ObjectId } from "mongodb";

export interface Admin {
    _id: ObjectId;
    token?: string;
    name?: string;
    username: string;
    password?: string;
}