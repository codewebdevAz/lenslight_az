import express  from "express";
import dotenv from 'dotenv';
import conn from './db.js';
import pageRoutes from './routes/pageRoute.js';

dotenv.config()

const app = express();

// connected db 
conn();
const port = process.env.PORT


// Template engine ejs
app.set("view engine", "ejs");

// Static Middleware
app.use(express.static("public"));

app.use(pageRoutes);

app.listen(port, ()=>{
    console.log(`${port} portunda isleyir.`);
})