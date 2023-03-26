const { MongoClient } = require("mongodb");
const express = require("express");
const ejs = require("ejs");
const { Server } = require("socket.io");


const app = express();
const http = require("http").createServer(app);
const io = new Server(http);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("grahps.ejs");
});

const uri = "mongodb://admin:admin@54.85.148.227:27017/database";
const client = new MongoClient(uri);

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
      const [voltage, time] = await listByName(client, "voltage");
      const [current, timeC] = await listByName(client, "current");
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
  }, 200);
}

http.listen(5050, () => console.log("Server running on port 5500"));

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
