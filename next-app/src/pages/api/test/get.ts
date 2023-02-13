import Test from 'models/testModel/testModel';
import connectMongoDB from 'utils/connectMongoDB';

import type { NextApiRequest, NextApiResponse } from 'next'


export default async function getTest(req: NextApiRequest, res: NextApiResponse) {

    connectMongoDB();

    try {

        console.log('getting docs...');
        const allDocs = await Test.find();
        console.log('found them!');
        res.status(200).json(allDocs);
    } catch (error) {
        res.status(500).send(error);
    }
}