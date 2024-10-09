import express from 'express';
import cookieParser from 'cookie-parser';
import { config } from "dotenv";
import cors from 'cors';
import userRoute from './routes/user.route.js';
import companyRoute from './routes/company.route.js'

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

app.use('/api/v1/user', userRoute);
app.use('/api/v1/company', companyRoute);


export default app;