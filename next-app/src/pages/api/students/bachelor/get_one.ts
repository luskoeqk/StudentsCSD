import connectMongoDB from 'utils/connectMongoDB';
import Student from 'models/studentModel/studentModel';

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function getOneStudent(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'GET') {

        try {

            connectMongoDB();                           // Connect to the MongoDB database

            const { id } = req.query;
            const student = await Student.findById(id);

            if (student) {

                res.status(200).json({ message: 'Student Bachelor found', student });
            } else {

                res.status(404).json({ message: 'Student Bachelor not found' });
            }
        } catch (error) {

            console.error(error);
            res.status(500).json({ message: 'Student Bachelor - Server error' });
        }
    } else {

        res.status(405).json({ message: 'Student Bachelor - Method not allowed' });
    }
}