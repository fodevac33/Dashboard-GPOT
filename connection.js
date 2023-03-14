const { MongoClient } = require("mongodb");
const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const uri = 'mongodb://admin:admin@54.164.104.223:27017/database';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    let count = 1;
    await simulationvoltage(client,count);
    const [voltage,time] = await listByName(client);
    res.render('grahps', { arrayVoltage: voltage, arrayTime : time }); 
    //await deleteVoltage(client,time,voltage)
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
});

app.listen(5500, () => console.log('Server running on port 5500'));

async function listByName(client) {
  const result = await client.db("database").collection("voltage").find({}, { projection: { time: 1 } });
  const time = await result.toArray();
  const result2 = await client.db("database").collection("voltage").find({}, { projection: { valor: 1 } });
  const voltage = await result2.toArray();
  const arrayTime = [];
  const arrayVoltage = [];
  time.forEach(doc => {
    arrayTime.push(doc.time);
  });
  voltage.forEach(doc => {
    arrayVoltage.push(doc.valor);
  });

  if (voltage.length > 0) {
    console.log(arrayTime);
    console.log(arrayVoltage);
    return [arrayVoltage, arrayTime];
  } else {
    console.log("Didn't find");
    return [];
  }
}


async function simulationvoltage(client,count){
  const rand2 = Math.floor(Math.random() * 100);
  const result = await client.db("database").collection("voltage").insertOne({
    time: count++, 
    valor: rand2
  });
}


async function deleteVoltage(client, arrayTime, arrayVoltage){
  const result = await client.db("database").collection("voltage").deleteMany({
    time: arrayTime[0],
    valor: arrayVoltage[0]
  });
}