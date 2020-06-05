import express from 'express';
import authRouter from './api/auth';
import userRouter from './api/user';
import bodyParser from 'body-parser';
import cors from 'cors';

// Setup express app
const app = express();

const PORT = 8080;

// Used to parse the body for incoming requests.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Enables all endpoints in auth file
app.use(authRouter);
app.use(userRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});