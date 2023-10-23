
const collection = db.collection('Users');
const findResult = await collection.find().toArray();
console.log(findResult);