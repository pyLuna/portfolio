import { User } from "@/types/admin";
import { ADMIN } from "@/utils/constants";
import query from "@/utils/query";

/**
 * Retrieves a user by their username address from the admin collection.
 * 
 * @param username - The username address of the user to retrieve.
 * @returns A promise that resolves to the user object if found, or null if not found.
 */

const getUserByUsername = async (username: string) => {

    const result = await query<User>({
        collection_name: ADMIN,
        queryFn: async (client) => {
            return await client.findOne({ username });
        },
    });

    return result;
}

const addUser = async (user: User) => {

    const findUsername = await query<User>({
        collection_name: ADMIN,
        queryFn: async (client) => {
            return await client.findOne({ username: user.username });
        },
    });

    if (findUsername) throw new Error("User already exists");

    const result = await query<User>({
        collection_name: ADMIN,
        queryFn: async (client) => {
            return await client.insertOne({ ...user });
        },
    });

    return result;
}

export {
    addUser,
    getUserByUsername
};

