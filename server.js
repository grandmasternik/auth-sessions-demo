// Dependencies
const express = require('express');
const app = express();
require('dotenv').config();
const session = require('express-session');

// Middleware 
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
    })
);

// Routes/Controllers
app.get('/any', (req, res) => {
    req.session.food = 'Kale';
    res.send('This is the route that sets the value of food');
});

// Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));