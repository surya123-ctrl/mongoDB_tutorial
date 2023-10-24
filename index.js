const express = require('express');
const server = express();
const { dbConnection } = require('./db');
//get
server.get('/users', async (req, res) => {
    try {
        const db = await dbConnection();
        const collection = db.collection('Users');
        const users = await collection.find().toArray();
        res.json(users);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' })
    }
})
//post
server.use(express.json());
server.post('/users', async (req, res) => {
    try {
        const db = await dbConnection()
        const collection = db.collection('Users')
        const result = await collection.insertOne(req.body);
        res.json('Updated');

    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
//put
server.put('/users/:name', async (req, res) => {
    console.log(req.params);
    const db = await dbConnection();
    const collection = db.collection('Users');
    const singleData = await collection.updateOne({ name: req.params.name }, { $set: req.body });


})

server.listen(3000, () => {
    console.log("Server started")
});