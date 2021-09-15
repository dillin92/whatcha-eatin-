const { Schema, model } = require('mongoose');

const SearchSchema = new Schema({
    latitude: {
        type: Integer,
    },
    longitude: {
        type: Integer,
    },
    keyword: {
        type: String,
    },
    radius: {
        type: Integer,
    }
});