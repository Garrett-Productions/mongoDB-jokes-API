const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/JokeSchema', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('DB is firing homie'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));