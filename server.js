const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080;

app.use(morgan('tiny'));
app.use(bodyparser.urlencoded({extended:true}));

// mongoDB Connection
connectDB();

// set view engine (we are using ejs)
// second line is necessary if the default folder is not named 'views'
app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname, "views/ejs"));

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));
app.use('/image', express.static(path.resolve(__dirname, "assets/image")));

// load router
app.use('/', require('./server/routes/router'));

app.listen(PORT, ()=> {console.log(`Server running on http://localhost:${PORT}`)});