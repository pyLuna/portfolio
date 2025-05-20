import { MongoClient, ServerApiVersion } from "mongodb";
/**
 * Initializes Mongo DB client
 */
let mongo: MongoClient;

const uri = `mongodb+srv://${process.env.NEXT_DB_USER}:${process.env.NEXT_DB_PASSWORD}@main.nttg7ye.mongodb.net/?retryWrites=true&w=majority&appName=main`;
mongo = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

console.log("Connected to MongoDB, DB NAME: ", mongo.options.dbName);

export { mongo };

