import { NextApiRequest, NextApiResponse } from 'next';
import connectMongoDB from 'utils/connectMongoDB';
import Test from 'models/testModel/testModel';


export default async function getOne(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'GET') {

        try {

            connectMongoDB(); // Connect to the MongoDB database

            const { id } = req.query;
            const student = await Test.findById(id);

            if (student) {

                res.status(200).json({ message: 'Student found', student });
            } else {

                res.status(404).json({ message: 'Student not found' });
            }
        } catch (error) {

            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    } else {

        res.status(405).json({ message: 'Method not allowed' });
    }
}