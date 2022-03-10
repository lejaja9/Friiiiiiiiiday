from flask import *
import os
from Spotify_req import *

app = Flask(__name__)

@app.route('/<string:song_id>/<string:activity>/<string:time>/<string:genre>/')

def recs(song_id, activity, time, genre):
    recommendations = song_rec(song_id, activity, time, genre)
    recommendations.get_song_recommendations()
    
    return jsonify(recommendations.output)


@app.route('/')

def home():
    return "¡Vamos a la Playlist! Martin secretly loves Con Calma!"

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host = '0.0.0.0', port = port)