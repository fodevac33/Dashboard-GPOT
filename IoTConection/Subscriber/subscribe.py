from connect import credentials, mqtt_connection
from awscrt import mqtt
import threading

def on_message_received(topic, payload, dup, qos, retain, **kwargs):
    print("Received message from topic '{}': {}".format(topic, payload))

subscribe_future, packet_id = mqtt_connection.subscribe(
    topic=credentials["topic"],
    qos=mqtt.QoS.AT_LEAST_ONCE,
    callback=on_message_received
)

subscribe_result = subscribe_future.result()
print(f'Subscribed to {credentials["topic"]}')

threading.Event().wait()
