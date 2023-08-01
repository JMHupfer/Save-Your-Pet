const mongoose = require('mongoose');

const { Schema } = mongoose;

const saveSchema = new Schema({
    saveDate: {
        type: Date,
        default: Date.now
    },
    adoptions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Adoption'
        }
    ],
    medicines: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Medicine'
        }
    ]
});

const Save = mongoose.model('Save', saveSchema);

module.exports = Save;