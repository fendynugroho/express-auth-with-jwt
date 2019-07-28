const express = require('express');
const app = express();

//Import Routes
const authRoute = require('./routes/auth');

//route middleware
app.use('/api/user', authRoute);

app.listen(3030, () => console.log('App listening on port 3030!'));
