import { createContext, useContext, useEffect, useState } from 'react';

const WebSocketContext = createContext(null);

export const useWebSocketContext = () => useContext(WebSocketContext);

export const WebSocketContextProvider = ({ children }) => {

    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = new WebSocket('ws://localhost:3000');

        newSocket.onopen = () => {
            console.log('WebSocket connection opened');
        };

        setSocket(newSocket);

        return () => {
            newSocket.close();
        };
    }, []);


    return (
        <WebSocketContext.Provider value={socket}>
            {children}
        </WebSocketContext.Provider>
    );
};

export default WebSocketContext;