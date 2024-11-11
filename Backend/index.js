import express from 'express';
import cookieParser from 'cookie-parser';
import { config } from "dotenv";
import cors from 'cors';
import userRoute from './routes/user.route.js';
import companyRoute from './routes/company.route.js'
import jobRoute from './routes/job.route.js';
import applicationRoute from './routes/application.route.js';
import { connectionToDatabase } from "./db/connection.js";
import path from 'path';

config();

const app = express();

const __dirname = path.resolve()
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
const coresOption = {
    origin: 'http://localhost:5173',
    credentials: true
}

app.use(cors(coresOption));

app.use('/api/v1/user', userRoute);
app.use('/api/v1/company', companyRoute);
app.use('/api/v1/job', jobRoute);
app.use('/api/v1/application', applicationRoute);



app.use(express.static(path.join(__dirname, "/frontend/dist")))
app.get('*', (_,res) =>{
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
})

const PORT = process.env.PORT || 5000;
connectionToDatabase()
    .then(() => {
        app.listen(PORT, () => { console.log(`Server is listen on ${PORT} & Connect to Database`) });
    }).catch((err) => console.log(err))

export default app;