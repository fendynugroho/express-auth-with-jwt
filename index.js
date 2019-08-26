const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//Import Routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

dotenv.config();

//Connect to db
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
	console.log('connected to db')
);

//Middleware
app.use(express.json());

//route middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);

app.listen(3030, () => console.log('Yeay your app is running, Your app is listening on port 3030!'));
