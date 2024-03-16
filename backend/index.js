import express from "express";
import dotenv from "dotenv";
import db from "./config/Database.js";
import cookieParser from "cookie-parser";
import cors from "cors";
// import Users from "./models/UserModel.js";
import Router from "./routes/index.js";
dotenv.config();
const app = express();

try {
    await db.authenticate();
    console.log('Database Connected..');
    // await Users.sync(); //digunakan pas awal membuat tabel pada mysql
} catch (error) {
    console.error(error);
}

app.use(cors({ credentials: true, origin: 'http://localhost:3000'}));
app.use(cookieParser());
app.use(express.json());
app.use(Router);

app.listen(5000, () => console.log('server listening on port 5000'));

