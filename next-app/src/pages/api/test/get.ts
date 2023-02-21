// MongoDB
import connectMongoDB from 'utils/connectMongoDB';
// Model
import Test from 'models/testModel/testModel';

// types
import type { NextApiRequest, NextApiResponse } from 'next'

// Web Socket
// import { createServer } from 'http';
// import { WebSocketServer } from 'ws';
// import { parse } from 'url'


export default async function getTest(req: NextApiRequest, res: NextApiResponse) {


    try {

        connectMongoDB();

        // const server = createServer((req, res) => {
        //     res.writeHead(200, { 'Content-Type': 'text/plain' });
        //     res.end('WebSocket server running');
        // });

        // const wss = new WebSocketServer({ server });

        // wss.on('connection', (ws) => {
        //     console.log('a user connected');

        //     ws.on('message', (message) => {
        //         console.log(`received: ${message}`);
        //     });

        //     ws.on('close', () => {
        //         console.log('a user disconnected');
        //     });
        // });

        console.log('getting docs...');
        const allDocs = await Test.find();
        console.log('found them');
        res.status(200).json(allDocs);
    } catch (error) {
        res.status(500).send(error);
    }
}