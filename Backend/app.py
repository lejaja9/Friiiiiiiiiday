from flask import *
import os
from Spotify_rec import *

app = Flask(__name__)

@app.route('/<string:song_id>/<string:activity>/<string:time>/<string:genre>/')

def recs(song_id, activity, time, genre):
    recommendations = song_rec(song_id, activity, time, genre)
    recommendations.get_artist_id()
    recommendations.get_parameters()
    recommendations.get_activity_parameters()
    recommendations.get_song_recommendations()
    
    response = jsonify(recommendations.output)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/')

def home():
    response = "¡Vamos a la Playlist! Martin secretly loves Con Calma!"
    return response

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 9000))
    app.run(host = '0.0.0.0', port = port)