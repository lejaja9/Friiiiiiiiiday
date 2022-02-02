import requests
import base64
import json
from ClientId import *

token_url = "https://accounts.spotify.com/api/token"
method = "POST"

token_header = {}
token_data = {}

message = f"{Client_ID}:{Client_Secret}"
message64 = base64.b64encode(message.encode())

token_header['Authorization'] = f"Basic {message64.decode()}"

token_data['grant_type'] = "client_credentials"

r = requests.post(token_url, headers= token_header, data = token_data)
token = r.json()['access_token']

song_id = "455AfCsOhhLPRc68sE01D8" #input
song_url = f"https://api.spotify.com/v1/audio-features/{song_id}"
token_header = {
    "Authorization": "Bearer " + token
}

res = requests.get(url = song_url, headers= token_header)

print(json.dumps(res.json(), indent=2))