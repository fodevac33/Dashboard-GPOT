from connect import credentials, mqtt_connection
from awscrt import mqtt
from pymongo import MongoClient
import threading, json

client = MongoClient('mongodb://admin:admin@50.16.94.93:27017/database')

db = client['database']

voltage_collection = db['voltage']
current_collection = db['current']

def database_insert(data_dict: dict):
    data_scope = 50

    voltage_size = voltage_collection.count_documents({})
    current_size = current_collection.count_documents({})

    if  voltage_size >= data_scope and  current_size >= data_scope:
        voltage_collection.delete_one({})
        current_collection.delete_one({})

    voltage_collection.insert_one(data_dict["voltage"])
    current_collection.insert_one(data_dict["current"])

   # print(f"Tamaño: vol: {voltage_size}, curr: {current_size}")

def on_message_received(topic, payload, dup, qos, retain, **kwargs):
    data_dict = json.loads(payload.decode("utf-8"))

    database_insert(data_dict)

    print("Received message from topic '{}': {}".format(topic, data_dict))


subscribe_future, packet_id = mqtt_connection.subscribe(
    topic=credentials["topic"],
    qos=mqtt.QoS.AT_LEAST_ONCE,
    callback=on_message_received
)

subscribe_result = subscribe_future.result()
print(f'Subscribed to {credentials["topic"]}')

threading.Event().wait()
