import express from 'express';
import cookieParser from 'cookie-parser';
import { config } from "dotenv";
import cors from 'cors';
config();

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())
const coresOption = {
    origin:'http://localhost:5173',
    credentials: true
}

app.use( cors(coresOption) );
export default app;