import connectMongoDB from 'utils/connectMongoDB';
import bachelorStudent from "models/studentModel/BachelorStudentModel";

import type { NextApiRequest, NextApiResponse } from 'next'


export default async function getAllBachelorStudent(req: NextApiRequest, res: NextApiResponse) {


    try {

        connectMongoDB();
        console.log('getting docs for Student Bachelors...');

        const allDocs = await bachelorStudent.find().sort({ dateOfCreation: -1 });

        console.log('Student Bachelors -> found them');
        res.status(200).json(allDocs);
    } catch (error) {
        
        res.status(500).send(error);
    }
}