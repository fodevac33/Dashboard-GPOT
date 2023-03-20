from awsiot import mqtt_connection_builder
from uuid import uuid4
from pathlib import Path

client_id = "reciever-" + str(uuid4())

current_folder_path = str(Path(__file__).parent)

credentials = {
    "endpoint": "adue630rr4m5j-ats.iot.us-east-1.amazonaws.com",
    "cert_filepath": current_folder_path + "/certs/device.pem.crt",
    "pri_key_filepath": current_folder_path + "/certs/private.pem.key",
    "ca_filepath": current_folder_path + "/certs/Amazon-root-CA-1.pem",
    "topic": "DC_DATA"
}


mqtt_connection = mqtt_connection_builder.mtls_from_path(
    endpoint=credentials["endpoint"],
    port=8883,
    cert_filepath=credentials["cert_filepath"],
    pri_key_filepath=credentials["pri_key_filepath"],
    ca_filepath=credentials["ca_filepath"], 
    client_id=client_id
)

connect_future = mqtt_connection.connect()

# result() waits until a result is available
connect_future.result()
print(f'{client_id} is connected!')
