const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => { 
    res.render('home');
})

app.get('/start', (req, res) =>{
    res.render('start');
})

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000");
})

