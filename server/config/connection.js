const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb+srv://jmhupfer:Germanboy_321@cluster0.tmenay1.mongodb.net/pet_DB?retryWrites=true&w=majority',
    {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection
