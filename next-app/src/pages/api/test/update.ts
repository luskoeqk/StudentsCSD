import Test from 'models/testModel/testModel';
import connectMongoDB from 'utils/connectMongoDB';

import type { NextApiRequest, NextApiResponse } from 'next'


export default async function updateTest(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'PATCH') {

        try {

            connectMongoDB();                                               // Connect to the MongoDB database
            const { _id, facultyNumber, name, email, lastEditEmail, lastEditDate } = req.body;

            const updatedStudent = await Test.findByIdAndUpdate(_id, { facultyNumber, name, email, lastEditEmail, lastEditDate }, { new: true });

            if (updatedStudent) {

                res.status(200).json({ message: 'Student updated successfully', student: updatedStudent });
            } else {

                res.status(404).json({ message: req.body });
            }
        } catch (error) {

            console.error(error);
            res.status(500).json({ message: 'Server error', error });
        }
    } else {

        res.status(405).json({ message: 'Method not allowed' });
    }
}