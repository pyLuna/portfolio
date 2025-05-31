import { ObjectId } from "mongodb";
import { BasicInfoType } from "./types/basic_info.type";
import { BASIC } from "./utils/constants";
import query from "./utils/query";

export const getBasicInfo = async () => {
    const result = await query<BasicInfoType>({
        collection_name: BASIC,
        queryFn: async (client) => {
            // Get the only document
            return await client.findOne();
        }
    });

    return result;
}

export const addBasicInfo = async (adminId: ObjectId) => {
    const result = await query<BasicInfoType>({
        collection_name: BASIC,
        queryFn: async (client) => {
            return await client.insertOne({ admin_id: adminId });
        }
    });

    return result;
}

export const updateBasicInfo = async (basicInfo: Partial<BasicInfoType>) => {
    const result = await query<BasicInfoType>({
        collection_name: BASIC,
        queryFn: async (client) => {
            return await client.updateOne({ admin_id: basicInfo.admin_id }, { $set: { ...basicInfo } });
        }
    });

    return result;
}