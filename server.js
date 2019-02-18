const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/API/usersAPI');
const profiles = require('./routes/API/profileAPI');
const posts = require('./routes/API/postsAPI');
const app = express();

const db = require('./config/keys').mongoURI;

mongoose
  .connect(db)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => console.log(err));

app.get('/', () => res.send('hello'));
app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profiles', profiles);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on ${port}`));
