const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    faculty_number: {
        type: String,
    },
    email: {
        type: String,
    },

    date_of_creation: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Student', studentSchema)