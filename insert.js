const { dbConnection } = require('./db');
async function main() {
    try {
        const db = await dbConnection();
        const collection = db.collection('Users');
        const data = [
            {
                name: "John",
                age: 34
            },
            {
                name: "Root",
                age: 98
            }
        ]
        const insertedResult = await collection.insertMany(data);
        console.log(insertedResult);
    }
    catch (err) {
        console.error(`Error occurred while inserting documents into the database`, err);
    }
}
main();