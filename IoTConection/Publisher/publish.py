from connect import credentials, client_id, mqtt_connection
from awscrt import mqtt
import random, json, time

num = 0

while True:

    voltage = round(5 + random.gauss(0.0, 0.5), 3)
    current = round(5 + random.gauss(0.0, 0.5), 3)

    # message = f'{{"time": {num}, "voltage": {voltage}, "current": {current}}}'
    message = json.dumps({
        "voltage":{
            "time": num, 
            "voltage": voltage
            }, 
        "current":{ 
            "time": num, 
            "current": current}
        }
    )

    mqtt_connection.publish(
        topic=credentials["topic"],
        payload=message,
        qos=mqtt.QoS.AT_LEAST_ONCE
    )

    print(f'Message published: {message}')

    num += 1 

    time.sleep(0.2)