const express = require('express');
require('dotenv').config();
const port = process.env.PORT;

const grid = require('./models/budget');
console.log('this is grid inside of budgtr.js', grid);

const app = express();

app.listen(port, () => {
    console.log(`Express is listening port: ${port}`);
});

app.get('/budgets', (req, res) => {
    res.render('index.ejs');
});

app.get('/budgets/:id', (req, res) => {
    const foundBudgtr = grid.find(function(f) {
        return f.id == req.params.id
    })
});