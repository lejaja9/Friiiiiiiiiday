import requests
import base64
import json
from ClientId import *

class song_feat:
    """A class that holds the song features of danceability, energy, key, loudness, mode, speechiness, acousticness, instrumentalness, liveness, valence, tempo, duration_ms, and time_signature. Taken from the Spotify API."""

    def __init__(self, song_link):
        self.song_link = song_link
        self.features = {}
        self.song_ID = None

    def get_song_ID(self):
        start = str(self.song_link).find('track/') + 6
        end = str(self.song_link).find('?')
        ID = str(self.song_link)[start:end]
        self.song_ID = ID
        return ID

    def get_song_features(self):
        token_url = "https://accounts.spotify.com/api/token"
        #method = "POST"

        token_header = {}
        token_data = {}

        message = f"{Client_ID}:{Client_Secret}"
        message64 = base64.b64encode(message.encode())

        token_header['Authorization'] = f"Basic {message64.decode()}"

        token_data['grant_type'] = "client_credentials"

        r = requests.post(token_url, headers = token_header, data = token_data)
        token = r.json()['access_token']

        song_id = self.get_song_ID() #input
        song_url = f"https://api.spotify.com/v1/audio-features/{song_id}"
        token_header = {
            "Authorization": "Bearer " + token
        }

        res = requests.get(url = song_url, headers= token_header)
        self.features = res.json()
        #self.features = json.dumps(res.json(), indent=2)

f = song_feat("https://open.spotify.com/track/4Li2WHPkuyCdtmokzW2007?si=a86e5d02275d4ffa")
f.get_song_features()