from connect import credentials, mqtt_connection
from awscrt import mqtt
from pymongo import MongoClient
import threading, json

client = MongoClient('mongodb://admin:admin@54.85.148.227:27017/database')

db = client['database']

collection = db['voltage']

def on_message_received(topic, payload, dup, qos, retain, **kwargs):
    data = json.loads(payload.decode("utf-8"))
    collection.insert_one(data)
    print("Received message from topic '{}': {}".format(topic, data))


subscribe_future, packet_id = mqtt_connection.subscribe(
    topic=credentials["topic"],
    qos=mqtt.QoS.AT_LEAST_ONCE,
    callback=on_message_received
)

subscribe_result = subscribe_future.result()
print(f'Subscribed to {credentials["topic"]}')

threading.Event().wait()
