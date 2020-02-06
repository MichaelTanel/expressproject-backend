import express from 'express';
import db from './db/db';
import { User } from './src/models/user';

// Setup express app
const app = express();

const PORT = 5000;

// get all todos
app.get('/api/v2/todos', (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'todos retrieved successfully',
        todos: db
    })
});

app.get('/login', (req, res) => {
    let user = null;
    try {
        user = new User(req.query.id, req.query.username, req.query.password);
    } catch (err) {
        console.log(err);
        res.status(400).send({
            success: 'false',
            message: 'invalid credentials'
        })
    }

    console.log(user);
    res.status(200).send({
        success: 'true',
        user: user
    })
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});