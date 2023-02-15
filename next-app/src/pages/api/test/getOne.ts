import { NextApiRequest, NextApiResponse } from 'next';
import connectMongoDB from 'utils/connectMongoDB';
import Test from 'models/testModel/testModel';


export default async function getOne(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'GET') {

        try {

            connectMongoDB(); // Connect to the MongoDB database

            const { id } = req.query;
            const user = await Test.findById(id);

            if (user) {

                res.status(200).json({ message: 'User found', user });
            } else {

                res.status(404).json({ message: 'User not found' });
            }
        } catch (error) {

            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    } else {

        res.status(405).json({ message: 'Method not allowed' });
    }
}