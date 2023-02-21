// import WebSocket from 'ws';

// const wss = new WebSocket.Server({ port: 3000 });


// wss.on('connection', (ws) => {
//     console.log('a user connected');

//     ws.on('message', (data) => {
//         console.log(`received: ${data}`);

//         // Broadcast the message to all connected clients
//         wss.clients.forEach((client) => {
//             if (client.readyState === WebSocket.OPEN) {
//                 client.send(data);
//             }
//         });
//     });

//     ws.on('close', () => {
//         console.log('a user disconnected');
//     });
// });