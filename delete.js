const { dbConnection } = require('./db');
async function main() {
    try {
        const db = await dbConnection();
        const collection = db.collection('Users');
        const filter = { name: 'John' };
        const deletedResult = await collection.deleteOne(filter);
        console.log(deletedResult.deletedCount);
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}
main();