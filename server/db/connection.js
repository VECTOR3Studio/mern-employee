import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.ATLAS_URI || "Shit";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
        }
});

async function connectToDatabase() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Connected Successfully");
    } catch (error) {
        console.log(error.message + " From connection.js");
    }
}

connectToDatabase();
let db = client.db("employees");

export default db;