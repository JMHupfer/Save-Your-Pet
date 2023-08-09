const { Schema, model } = require('mongoose');


const adoptionSchema = new Schema({
    id: {
        type: Number,
        required: true,
    },

    type: {
        type: String,
        required: true,
        trim: true
    },

    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true,
        min:0
    },

    description: {
        type: String
    }
});

const Adoption = model('Adoption', adoptionSchema);

module.exports = Adoption;