const express = require(express);
require('dotenv').config();
const port = process.env.PORT;

const incomesExpenditures =require('/models/grid')
console.log('this is grid inside of budgtr.js', data);

const app = express();

app.listen(port, () => {
    console.log(`Express is listening port: ${port}`);
});