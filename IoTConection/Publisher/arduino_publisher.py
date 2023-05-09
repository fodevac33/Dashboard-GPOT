from connect import credentials, client_id, mqtt_connection
from awscrt import mqtt
import random, json, time
import serial

num = 0

while True:
    try:
        ser = serial.Serial('/dev/ttyACM0', 9600)
        temp = ser.readline().decode().strip()

    except UnicodeDecodeError:
        continue

    if temp.startswith("J"):
        voltage = float(temp.lstrip("J"))
        current = round(5 + random.gauss(0.0, 0.5), 3)

        message = json.dumps({
            "voltage":{
                "time": num, 
                "voltage": voltage
                }, 
            "current":{ 
                "time": num, 
                "current": current
                }
            }
        )

        print(f'Message published: {message}')

        mqtt_connection.publish(
            topic=credentials["topic"],
            payload=message,
            qos=mqtt.QoS.AT_LEAST_ONCE
        )


    num += 1 

    ser.close()
    time.sleep(0.1)

