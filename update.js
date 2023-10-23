const { dbConnection } = require('./db');
async function main() {
    try {
        const db = await dbConnection();
        const collection = db.collection('Users');
        const updatedResult = collection.updateMany({ name: "Root" }, { $set: { age: 87 } });
        console.log((await updatedResult).modifiedCount);
    }
    catch {
        console.error("Error updating the database");
    }
}
main();