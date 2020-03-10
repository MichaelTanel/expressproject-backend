import express from 'express';
import auth from './api/auth';

// Setup express app
const app = express();

const PORT = 8080;

// Enables all endpoints in auth file
app.use(auth);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});