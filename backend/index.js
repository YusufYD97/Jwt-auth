const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
//Import Routes
const autRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log('connected to db!');
});

//MiddLeware
app.use(express.json());
//Route MiddLewares
app.use('/api/user', autRoute);
app.use('/api/post', postRoute);

app.listen(3000, () => console.log('Server Up and running'));

// eslint-disable --> tek satırı disable etmek icin, ayni satiri

// eslint-disable-next-line
//   ^
//   |
//   |
// tek satiri disable etmek icin, bi sonraki satiri

/* eslint-disable */ // --> butun dosya ıcın eslint disable eder.
