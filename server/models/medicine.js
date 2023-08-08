const { Schema, model } = require('mongoose');

const medicineSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    recovered: {
        type: String,
        required: true
    },

    died:{
        type: String,
        required: true
    },
})

const Medicine = model('Medicine', medicineSchema);

module.exports = Medicine;