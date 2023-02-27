import connectMongoDB from 'utils/connectMongoDB';
import Student from 'models/studentModel/studentModel';

import type { NextApiRequest, NextApiResponse } from 'next'


export default async function getStudent(req: NextApiRequest, res: NextApiResponse) {


    try {

        connectMongoDB();
        console.log('getting docs for Student Bachelors...');

        const allDocs = await Student.find().sort({ dateOfCreation: -1 });

        console.log('Student Bachelors -> found them');
        res.status(200).json(allDocs);
    } catch (error) {
        
        res.status(500).send(error);
    }
}