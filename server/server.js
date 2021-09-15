const express = require('express');
const db = require('./config/connection');
const cors =  require('cors');

const PORT = process.env.PORT || 3001;
const app = express;

app.use(express.urlencoded({ extended: false }));
app.use (express.json());
app.use(function(res,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods','POST,GET,DELETE, PUT, OPTIONS');
    next();
})
app.use(cors());

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${Port}!`)
    });
});