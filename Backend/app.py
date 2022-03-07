from flask import *
from Spotify_req import *

app = Flask(__name__)

@app.route('/<string:song_id>/<string:activity>/<string:time>/<string:genre>/')

def test(song_id, activity, time, genre):
    recommendations = song_rec(song_id, activity, time, genre)
    recommendations.get_song_recommendations()
    
    return jsonify(recommendations.output)


app.run(port = 8000)