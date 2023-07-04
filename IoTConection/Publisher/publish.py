from connect import credentials, client_id, mqtt_connection
from awscrt import mqtt
import random, json, argparse, time

parser = argparse.ArgumentParser()
parser.add_argument('publishing_speed', type=float)
args = parser.parse_args()

num = 0

def RandomNumber():
    return round(5 + random.gauss(0.0, 0.5), 3)

while True:

    voltage, current, power, imported, exported, net, total = [RandomNumber() for _ in range(7)]

    message = json.dumps({
        "voltage":{
            "time": num, 
            "voltage": voltage
        }, 

        "current":{ 
            "time": num, 
            "current": current
        },

        "power":{ 
            "time": num, 
            "power": power
        },
        "imported": {
            "time": num,
            "imported": imported
        },
        "exported": {
            "time": num,
            "exported": exported
        },
        "net": {
            "time": num,
            "net": net
        },
        "total": {
            "time": num,
            "total": total
        },
    })

    mqtt_connection.publish(
        topic=credentials["topic"],
        payload=message,
        qos=mqtt.QoS.AT_LEAST_ONCE
    )

    print(f'Message published: {message}')

    num += 1 

    time.sleep(args.publishing_speed)
