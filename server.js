import express from 'express';

import dotenv from 'dotenv';

// db and authenticateUser
import connectDB from './db/connect.js';

// routers
import authRouter from './db/connect.js';

// middleware
import errorHandlerMiddleware from './middleware/error-handler.js';
import notFoundMiddleware from './middleware/not-found.js';

app.use(express.json());

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.use('/api/v1/auth', authRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => console.log(`Server listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
};

start();
