import app from "./app.js";
import { connectionToDatabase } from "./db/connection.js";

const PORT = process.env.PORT || 5000;
connectionToDatabase()
    .then(() => {
        app.listen(PORT, () => { console.log("Server is listen & Connect to Database") });
    }).catch((err) => console.log(err))

// http://localhost:5000/