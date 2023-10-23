const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'myDatabase';
const dbConnection = async () => {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);
        return db;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
module.exports = { dbConnection };