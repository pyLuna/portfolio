import { ObjectId } from "mongodb";
import { BasicInfoType } from "./types/basic_info";
import { BASIC } from "./utils/constants";
import query from "./utils/query";

export const getBasicInfo = async (id: ObjectId) => {
    const result = await query<BasicInfoType>({
        collection_name: BASIC,
        queryFn: async (client) => {
            return await client.findOne({ admin_id: id })
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