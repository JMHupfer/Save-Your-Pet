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

    // breed: {
    //     type: String,
    //     required:true,
    //     trim:true
    // },

    name: {
        type: String,
        required: true
    },

    // size: {
    //     type: String
    // },

    // gender: {
    //     type: String
    // },

    age: {
        type: Number,
        required: true,
        min:0
    },

    // color: {
    //     type: String
    // },
    
    // status: {
    //     type: String,
    //     required: true
    // },

    // house_trained: {
    //     type: Boolean
    // },

    // location: {
    //     type: String,
    //     required: true
    // },

    // organization: {
    //     type: String
    // }
    description: {
        type: String
    }
});

const Adoption = model('Adoption', adoptionSchema);

module.exports = Adoption;