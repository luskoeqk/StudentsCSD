import { Schema, model, models } from 'mongoose';


const testSchema = new Schema({

    facultyNumber: {
        type: 'string',
        unique: true,
    },

    name: String,

    email: {
        type: 'string',
        unique: false,
    },

});


const Test = models.Test || model('Test', testSchema);

export default Test;