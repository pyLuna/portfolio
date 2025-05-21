import getMongoClient from "@/server/mongo/db.init";
import { Collection, Document } from "mongodb";

interface QueryParams {
    database_name?: string;
    collection_name: string;
    queryFn: (client: Collection<Document>) => any;
}

const query = async <T>({
    database_name = "portfolio",
    collection_name,
    queryFn
}: QueryParams): Promise<T> => {
    const mongo = await getMongoClient();

    const col = mongo.db(database_name).collection(collection_name);
    const result = await queryFn(col);

    return result as T;
};

export default query;
