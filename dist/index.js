import express from "express";
import { createServer } from "http";
import { MongoClient } from "mongodb";
import { Server } from "socket.io";
import ejs from "ejs";
const app = express();
//Setup de socket.io
const server = createServer(app);
const io = new Server(server);
//Conexion a la base de datos en el ec2
const ec2_ip = "50.16.94.93";
const uri = `mongodb://admin:admin@${ec2_ip}:27017/database`;
const client = new MongoClient(uri);
//Configuracion de la app en express
app.engine("html", ejs.renderFile);
app.set("view engine", "html");
app.get("/", (req, res) => {
    res.render("grahps.html");
});
server.listen(5500, () => console.log("Server running on port 5500"));
//Tiempo de actalizacion
const updateInterval = 200;
//Posibles colecciones en la base de datos
var Collections;
(function (Collections) {
    Collections["Voltage"] = "voltage";
    Collections["Current"] = "current";
})(Collections || (Collections = {}));
connect();
async function connect() {
    try {
        await client.connect();
    }
    catch (error) {
        console.error(error);
    }
    setInterval(async () => {
        try {
            const [voltage, time] = await listByName(client, Collections.Voltage);
            const [current, timeC] = await listByName(client, Collections.Current);
            //simulation(client,"current");
            //simulation(client,"voltage");
            //await deleteArray(client,"current",timeC, current);
            //await deleteArray(client,"voltage",time,voltage);
            io.emit("data", {
                arrayVoltage: voltage,
                arrayTime: time,
                arrayCurrent: current,
                arrayTimeC: timeC,
            });
        }
        catch (error) {
            console.error(error);
        }
    }, updateInterval);
}
async function listByName(client, collection) {
    const projectionObj = { [collection]: 1, time: 1 };
    const result = await client
        .db("database")
        .collection(collection)
        .find({}, { projection: projectionObj })
        .toArray();
    if (result.length > 0) {
        const arrayTime = result.map((doc) => doc.time);
        const arrayData = result.map((doc) => doc[collection]);
        return [arrayData, arrayTime];
    }
    else {
        return [];
    }
}
async function simulation(client, collection) {
    const rand1 = Math.floor(Math.random() * 100);
    const rand2 = Math.floor(Math.random() * 100);
    const addArray = {};
    addArray["time"] = rand1;
    addArray[collection] = rand2;
    await client.db("database").collection(collection).insertOne(addArray);
}
async function deleteArray(client, collection, arrayTime, arrayField) {
    const deleteArray = {};
    deleteArray["time"] = arrayTime[0];
    deleteArray[collection] = arrayField[0];
    await client.db("database").collection(collection).deleteMany(deleteArray);
}
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map