const express = require("express");
const moment = require('moment')
const path = require("path");
const request = require('request')
const City = require("./server/model/City.js")
const axios = require('axios')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/whetherDB', { useNewUrlParser: true,useUnifiedTopology:true })
/* mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/yourDB') */
const bodyParser = require("body-parser");
const api = require('./server/routes/api')
const app = express();

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', api)

/* expenses.forEach(e=>  (e = new Expense({name:e.name,amount:e.amount,date:e.date,group:e.group})).save()) */
const port = 3001;

/* app.listen(process.env.PORT || PORT) */
app.listen(port, function () {
  console.log(`serever is running on port ${port}`);
  

});
