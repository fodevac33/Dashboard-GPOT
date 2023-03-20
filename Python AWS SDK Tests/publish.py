from connect import credentials, client_id, mqtt_connection
from datetime import datetime
from awscrt import mqtt
import random, json, time
while True:
    now = datetime.now()

    voltage = random.randrange(5, 10) +  random.random()

    message = f'id: {client_id}, voltage: {voltage}, time: {now}'

    mqtt_connection.publish(
        topic=credentials["topic"],
        payload= json.dumps(message),
        qos=mqtt.QoS.AT_LEAST_ONCE
    )

    print(f'Message published: {message}')

    time.sleep(1)