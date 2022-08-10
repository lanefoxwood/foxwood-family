const express = require("express");
const app = express();
const path = require("path");
const ejs = require('ejs');
const ejsMate = require('ejs-mate');


app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.use(express.static(path.join(__dirname, 'public')))





app.get('/', (req, res) => {
    res.render('index')
})

app.get('/home', (req, res) => {
    res.render('home');
})

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/donate', (req, res) => {
    res.render('donate');
});





// get /travels/:id -- show page for ONE location via id...
// get /travels/map -- 
// get /travel/:id

app.get('/travels', (req, res) => {
    res.render('travels/index');
});
app.get('/travels/:id', (req, res) => {
    res.render('travels/show');
});



app.get('/*', (req, res) => {
    res.render('error')
})


app.listen(8080, () => {
    console.log('listening on PORT 8080')
})