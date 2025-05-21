import { Admin } from "@/lib/types/admin";
import { ADMIN } from "@/lib/utils/constants";
import query from "@/lib/utils/query";
import { ObjectId } from "mongodb";

/**
 * Retrieves a user by their username address from the admin collection.
 * 
 * @param username - The username address of the user to retrieve.
 * @returns A promise that resolves to the user object if found, or null if not found.
 */

const getUserByUsername = async (username: string) => {
    const result = await query<Admin>({
        collection_name: ADMIN,
        queryFn: async (client) => {
            return await client.findOne({ username });
        },
    });

    return result;
}

const addUser = async (user: Partial<Admin>) => {
    const findUsername = await query<Admin>({
        collection_name: ADMIN,
        queryFn: async (client) => {
            return await client.findOne({ username: user.username });
        },
    });

    if (findUsername) throw new Error("Admin already exists");

    const result = await query<Admin>({
        collection_name: ADMIN,
        queryFn: async (client) => {
            return await client.insertOne({ ...user });
        },
    });

    return result;
}

const getAdmin = async (id: string) => {
    const admin = await query<Admin>({
        collection_name: ADMIN,
        queryFn: async (client) => {
            return await client.findOne({ _id: new ObjectId(id) })
        }
    });
    delete admin.password;
    return admin;
}

export {
    addUser, getAdmin, getUserByUsername
};

