import connectMongoDB from "utils/connectMongoDB";
import Student from "models/studentModel/studentModel";

import type { NextApiRequest, NextApiResponse } from 'next'


export default async function addTest(req: NextApiRequest, res: NextApiResponse) {

    const {
        distinction,
        faculty_number,
        status_of_ksk,
        name,
        n_of_enrollment_order,
        names,
        egn,
        names_latin,
        phone_number,
        email,
        in_front_of_school,
        location_of_the_transitional_educationa_institution,
        professional_qualification,
        confirmation_by_nacid,
        desired_major,
        desired_shape,
        length_of_study,

        
        dateOfCreation,
        lastEditEmail,
        lastEditDate

    } = req.body;

    try {

        connectMongoDB();
        console.log('Trying to create document for Student Bachelor...');

        const doc = await Student.create({
            distinction,
            faculty_number,
            status_of_ksk,
            name,
            n_of_enrollment_order,
            names,
            egn,
            names_latin,
            phone_number,
            email,
            in_front_of_school,
            location_of_the_transitional_educationa_institution,
            professional_qualification,
            confirmation_by_nacid,
            desired_major,
            desired_shape,
            length_of_study,


            dateOfCreation,
            lastEditEmail,
            lastEditDate
        });
        res.status(201).json(doc);
    } catch (err) {

        console.error('Error while creating new bachelor document:', err);
        res.status(400).send({ message: err });
    }
}