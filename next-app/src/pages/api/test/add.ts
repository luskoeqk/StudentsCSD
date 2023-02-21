// MongoDB
import connectMongoDB from 'utils/connectMongoDB';
// Model
import Test from 'models/testModel/testModel';

// types
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function addTest(req: NextApiRequest, res: NextApiResponse) {


    const { facultyNumber, name, email, dateOfCreation, lastEditEmail, lastEditDate } = req.body;

    try {

        connectMongoDB();
        console.log('Trying to create document');

        const doc = await Test.create({ facultyNumber, name, email, dateOfCreation, lastEditEmail, lastEditDate });
        res.status(201).json(doc);
    } catch (err) {

        console.error('Error while creating new document:', err);
        res.status(400).send({ message: err });
    }
}
