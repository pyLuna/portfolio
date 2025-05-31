import { Category } from "./types/category.type";
import { CATEGORY } from "./utils/constants";
import query from "./utils/query";

export const getCategory = async () => {
    const result = await query<Category>({
        collection_name: CATEGORY,
        queryFn: async (client) => {
            // Get all categories, does not need pagination
            return await client.find({}).toArray();
        }
    });

    return result;
}

export const addCategory = async (category: Category) => {
    const result = await query<Category>({
        collection_name: CATEGORY,
        queryFn: async (client) => {
            return await client.insertOne({ ...category, created_at: new Date() });
        }
    });

    return result;
}

export const deleteCategory = async (code: string) => {
    const result = await query<Category>({
        collection_name: CATEGORY,
        queryFn: async (client) => {
            return await client.deleteOne({ code: code });
        }
    });
    return result;
}
