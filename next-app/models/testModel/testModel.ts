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

});


const Test = models.Test || model('Test', testSchema);

export default Test;