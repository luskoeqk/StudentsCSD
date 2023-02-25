import { Schema, model, models } from 'mongoose';

const studentSchema = new Schema({

    distinction: 'string',

    faculty_number: 'string',

    status_of_ksk: 'string',

    name: 'string',
    
    n_of_enrollment_order: 'string',
    
    names: 'string',
    
    egn: 'string',
    
    names_latin: 'string',
    
    phone_number: 'string',
    
    email: 'string',
    
    in_front_of_school: 'string',
    
    location_of_the_transitional_educationa_institution: 'string',
    
    professional_qualification: 'string',
    
    confirmation_by_nacid: 'string',
    
    desired_major: 'string',
    
    desired_shape: 'string',
    
    length_of_study: 'string',

});

const Student = models.Student || model('Student', studentSchema);
export default Student;