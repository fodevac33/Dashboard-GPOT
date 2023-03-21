from connect import credentials, client_id, mqtt_connection
from awscrt import mqtt
import random, json, time

num = 0

while True:

    voltage = random.randrange(8, 10) +  random.random()

    message = f'{{"time": {num}, "valor": {voltage}}}'

    mqtt_connection.publish(
        topic=credentials["topic"],
        payload=message,
        qos=mqtt.QoS.AT_LEAST_ONCE
    )

    print(f'Message published: {message}')

    num += 1

    time.sleep(2)