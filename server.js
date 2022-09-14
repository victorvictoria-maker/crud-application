const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');

const app = express();

dotenv.config({ path: 'config.env' });
const PORT = process.env.PORT || 8080;

app.use(morgan('tiny'));
app.use(bodyparser.urlencoded({extended:true}));

// set view engine (we are using ejs)
// second line is necessary if the default folder is not named 'views'
app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname, "views/ejs"));

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));
app.use('/image', express.static(path.resolve(__dirname, "assets/image")));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, ()=> {console.log(`Server running on http://localhost:${PORT}`)});