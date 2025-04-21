import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import taskRoutes from './routes/taskRoutes.js'; 

const app = express();
app.use(bodyParser.json());
dotenv.config();
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: "API is running successfully! Use /tasklist endpoints for CRUD operations." });
  });
  
const PORT = process.env.PORT || 8000;
const URL = process.env.MONGOURL;

// Routes
app.use('/tasklist', taskRoutes); 

mongoose.connect(URL).then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.log("MongoDB connection error", err);
});