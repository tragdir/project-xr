// /* eslint-disable no-console */
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const db = require('./db');
const itemRouter = require('./routes/item-router');

const app = express();
const apiPort = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api', itemRouter);

app.listen(apiPort, () => {
    console.log(`[Hack.Diversity React Template] - Server running on port ${apiPort}`);
});
