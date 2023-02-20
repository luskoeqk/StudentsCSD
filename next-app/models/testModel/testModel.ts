import { Schema, model, models } from 'mongoose';


const testSchema = new Schema({

    facultyNumber: {
        type: 'string',
        unique: true,
        required: false
    },

    name: {
        type: 'string',
        required: false
    },

    email: {
        type: 'string',
        required: false
    },

    dateOfCreation: {
        type: 'string',
        required: true
    },

    lastEditEmail: {
        type: 'string',
        required: true
    }

});


const Test = models.Test || model('Test', testSchema);

export default Test;