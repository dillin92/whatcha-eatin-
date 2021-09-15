const mongoose = require('mongoose');

mongoose.connect(process.env.MONOGODB_URI || 'mongodb://localhost/whatcha-eatin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

module.exports = mongoose.connection;