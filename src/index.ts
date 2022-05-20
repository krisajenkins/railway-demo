import { WebSocket } from 'ws';

const port: number = process.env.PORT
    ? parseInt(process.env.PORT)
    : 8080;

const server = new WebSocket.Server({ port });
server.on("connection", (client: WebSocket) => {
    client.send("hello world");
});
