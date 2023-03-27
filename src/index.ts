import express, {Express, Request, Response} from "express";
import ejs from "ejs";
import {createServer} from "http";
import {MongoClient} from "mongodb";
import {Server} from "socket.io"


const app: Express = express();

//Setup de socket.io
const server = createServer(app);
const io = new Server(server);

//Conexion a la base de datos en el ec2
const ec2_ip = "50.16.94.93";
const uri = `mongodb://admin:admin@${ec2_ip}:27017/database`;
const client = new MongoClient(uri);

//Configuracion de la app en express
app.set("view engine", "ejs");

app.get("/", (req: Request, res: Response) => {
    res.render("grahps.ejs");
});

server.listen(5500, () => console.log("Server running on port 5500"));