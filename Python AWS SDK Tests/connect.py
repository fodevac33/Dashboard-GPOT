from awsiot import mqtt_connection_builder
from uuid import uuid4


client_id = 'client-' + str(uuid4())

certs_folder_path = "/home/felipe/Documents/Semillero GPOT/Dashboard-GPOT/Python AWS SDK Tests/certs"

credentials = {
    "endpoint": "adue630rr4m5j-ats.iot.us-east-1.amazonaws.com",
    "cert_filepath": certs_folder_path + "/device.pem.crt",
    "pri_key_filepath": certs_folder_path + "/private.pem.key",
    "ca_filepath": certs_folder_path + "/Amazon-root-CA-1.pem",
    "topic": "DC_DATA"
}

mqtt_connection = mqtt_connection_builder.mtls_from_path(
    endpoint=credentials["endpoint"],
    cert_filepath=credentials["cert_filepath"],
    pri_key_filepath=credentials["pri_key_filepath"],
    ca_filepath=credentials["ca_filepath"],
    client_id=client_id
)

connect_future = mqtt_connection.connect()

# result() waits until a result is available
connect_future.result()
print(f'{client_id} is connected!')