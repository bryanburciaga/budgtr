const express = require('express');
require('dotenv').config();
const port = process.env.PORT;
const budget = require('./models/budget');
console.log('this is grid inside of budgtr.js', budget);
const app = express();
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Express is listening port: ${port}`);
});

app.get('/budget', (req, res) => {
    res.render('index.ejs', {budgetTable: budget});
});

app.get('/budget/:id', (req,res) => {
    res.render('show.ejs', {
        budgetTable: budget[req.params.id]
    });
res.render('show.ejs', {budget: budgetTable});
    // render automaticlly looks inside of the folder named views at the root of out app
});

