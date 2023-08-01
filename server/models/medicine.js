const { Schema, model } = require('mongoose');

const medicineSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    recovered: {
        type: Number,
        required: true
    },

    died:{
        type: Number,
        required: true
    },
})

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;