import { ObjectId } from "mongodb";
import { Category } from "./types/category.type";
import { Content } from "./types/content.type";
import { CONTENTS } from "./utils/constants";
import query from "./utils/query";

export const getContents = async () => {
    const result = await query<Category>({
        collection_name: CONTENTS,
        queryFn: async (client) => {
            // Get all categories, does not need pagination
            return await client.find({}).toArray();
        }
    });

    return result;
}

export const getContentById = async (id: string | ObjectId) => {
    const result = await query<Category>({
        collection_name: CONTENTS,
        queryFn: async (client) => {
            // Get all categories, does not need pagination
            return await client.findOne({ _id: new ObjectId(id) });
        }
    });

    return result;
}

export const addContent = async (content: Content) => {
    const result = await query<Content>({
        collection_name: CONTENTS,
        queryFn: async (client) => {
            return await client.insertOne(content);
        }
    });

    return result;
}

export const updateContent = async (content: Partial<Content>) => {
    const { _id, ...contents } = content;
    const result = await query<Content>({
        collection_name: CONTENTS,
        queryFn: async (client) => {
            return await client.updateOne({ _id: new ObjectId(_id) }, { $set: { ...contents } });
        }
    });
    return result;
}

export const deleteConent = async (_id: ObjectId) => {
    const result = await query<Content>({
        collection_name: CONTENTS,
        queryFn: async (client) => {
            return await client.deleteOne({ _id: new ObjectId(_id) });
        }
    });
    return result;
}
