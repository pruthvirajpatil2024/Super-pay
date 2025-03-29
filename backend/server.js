const express = require("express");
const mongoose = require("mongoose");
// For accessing ENV variables.
require('dotenv').config();

// ENV variables
const PORT =  process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// All routes.
const userRoutes = require("./routes/UserRoutes");

const app = express();
app.use(express.json());

// Connect to database.
mongoose.connect(MONGODB_URI).then(()=>{
    console.log('Connected to database');
}).catch(()=>{
    console.log('Unable to connect database');
})

app.use('/user', userRoutes);

app.get('/',(req, res)=>{
    res.send('Hello World');
})

app.listen(PORT, ()=>{
    console.log('Server is running on ' + PORT);
});