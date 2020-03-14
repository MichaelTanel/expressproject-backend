import express from 'express';
import auth from './api/auth';
import bodyParser from 'body-parser';

// Setup express app
const app = express();

const PORT = 8080;

// Used to parse the body for incoming requests.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Enables all endpoints in auth file
app.use(auth);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});