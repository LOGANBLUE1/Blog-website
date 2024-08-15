const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(cors({
    origin: 'http://localhost:3001', // Your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true // Allow cookies if needed
}));

app.use(express.json());

const blog = require('./routes/blog');
app.use('/api/v1',blog);

const connectWithDB = require('./config/database');
connectWithDB();

app.listen(PORT,() => {
    console.log(`App is running successfully at PORT: ${PORT}.`);
})

app.get('/', (req,res) => {
    res.send(`<h1>This is homepage...</h1>`);
})