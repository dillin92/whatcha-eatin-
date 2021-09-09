const { Schema, model } = require('mongoose');

const searchSchema = new Schema(
    {
        latitude: {
            type: Integer,
            required: true
        },
        longitude: {
            type: Integer,
            required: true
        },
        keyword: {
            type: String,
        },
        radius: {
            type: Integer,
            required: true
        },
        user: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
    },
    {
        toJSON: { 
            virtuals: true
        }
    }
    
);

const Search = model('Search', searchSchema);

module.exports = Search;