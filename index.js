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

const PORT = process.env.PORT;
const URL = process.env.MONGOURL;

// Routes
app.use('/tasklist', taskRoutes); 
app.get('/', (req, res) => {
    res.send('API is running 🚀');
  });
  
mongoose.connect(URL).then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.log("MongoDB connection error", err);
});