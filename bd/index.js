const mongoose = require('mongoose');


const CONNECTION_URL = 'mongodb+srv://dietsii:dietsii@cluster0.0kjth.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL, { useNewUrlParser:true, useUnifiedTopology:true })
                .then( () => {
                    console.log('Connected to database ')
                })
                .catch(e => {
                    console.error('Connection error', e.message)});
mongoose.set('useFindAndModify', false);

const bd = mongoose.connection;

module.exports = bd;