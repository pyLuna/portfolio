import { Collection, Document } from "mongodb";
import { mongo } from "../server/mongo/db.init";

interface QueryParams {
    database_name?: string,
    collection_name: string;
    queryFn: (client: Collection<Document>) => any
}
const query = async <T>({
    database_name,
    collection_name,
    queryFn
}: QueryParams): Promise<T> => {
    await mongo.connect();

    const col = mongo.db("portfolio").collection(collection_name);

    const result = await queryFn(col);

    await mongo.close();

    return result as T;
}

export default query;