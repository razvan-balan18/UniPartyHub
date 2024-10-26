import express from "express";
import cors from 'cors';
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Party } from "./models/partyModel.js";
import partysRouter from "./routes/PartyRoute.js"

const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('welcome');
})

app.use('/partys', partysRouter);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to db");
        app.listen(PORT, () => {
            console.log(`App is listening to ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })