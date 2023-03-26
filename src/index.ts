import express, {Express, Request, Response} from "express";
import ejs from "ejs";
import http from "http";
import {MongoClient} from "mongodb";
import {Server} from "socket.io"


const app: Express = express()

const io = new Server(server);

io.listen(3000);


app.get("/", (req: Request, res: Response) => {
    res.send("Hi from TypeScript");
});
