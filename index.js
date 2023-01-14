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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

