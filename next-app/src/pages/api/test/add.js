import connectMongoDB from 'utils/connectMongoDB';
import Test from 'models/testModel/testModel';

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */


export default async function addTest(req, res) {

    const { facultyNumber, name, email } = req.body;

    connectMongoDB();

    try{
        
        console.log('Creating Document');
        const test = await Test.create(req.body);
        res.json({ test });
    } catch(err){
        res.status(400).send({ message: 'bad request' });
    }
}