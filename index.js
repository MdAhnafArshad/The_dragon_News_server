const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;


const categories = require('./data/categories.json');
const news = require('./data/news.json');


app.use(cors());

app.get('/categories', (req, res) => {
    res.send(categories);
})


// all news hear
app.get('/news', (req, res) => {
    res.send(news);
})

//specifics news
app.get('/news/:id', (req, res) => {

    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
})

app.get('/category/:id', (req, res) => {
    const id = parseInt(req.params.id);
    
    if (id === 0) {
        res.send(news);
    } else {
        const category = news.filter(n => parseInt(n.category_id) === id);
        res.send(category);
    }
})

app.get('/', (req, res) => {
    res.send('Dragon News');
})

app.listen(port, () => {
    console.log(`listening on port is ${port}`);
})