const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// app starting 
const app = express();
app.use(express.json());
app.use(cors());

//connecting to db
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });

requireDir('./src/models');



//  routerino

app.use('/api', require('./src/routes'));

//hello
app.listen(3001);

