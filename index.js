const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;


const categories = require('./data/categories.json')


app.use(cors());

app.get('/categories', (req, res)=>{
    res.send(categories)
})

app.get('/', (req, res)=> {
    res.send('Dragon News');
})

app.listen(port, ()=>{
    console.log(`listening on port is ${port}`);
})