import { MongoClient, ServerApiVersion } from "mongodb";
const uri = `mongodb+srv://${process.env.NEXT_DB_USER}:${process.env.NEXT_DB_PASSWORD}@main.nttg7ye.mongodb.net/?retryWrites=true&w=majority&tls=true&appName=main`;

// const uri = `mongodb+srv://${process.env.NEXT_DB_USER}:${process.env.NEXT_DB_PASSWORD}@main.nttg7ye.mongodb.net/?retryWrites=true&w=majority&appName=main`;

let cachedClient: MongoClient | null = null;

const getMongoClient = async (): Promise<MongoClient> => {
    console.log("uri", uri, "user", process.env.NEXT_DB_USER, "pass", process.env.NEXT_DB_PASSWORD);
    if (cachedClient) {
        return cachedClient;
    }
    console.log("Initiating new mongo client");
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    });

    await client.connect();
    cachedClient = client;

    console.log("MongoDB connected");

    return cachedClient;
};

export default getMongoClient;