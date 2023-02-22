// MongoDB
import connectMongoDB from 'utils/connectMongoDB';
// Model
import Test from 'models/testModel/testModel';

// types
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function getTest(req: NextApiRequest, res: NextApiResponse) {


    try {

        connectMongoDB();

        console.log('getting docs...');
        const allDocs = await Test.find().sort({ dateOfCreation: -1 });
        console.log('found them');
        res.status(200).json(allDocs);
    } catch (error) {
        res.status(500).send(error);
    }
}