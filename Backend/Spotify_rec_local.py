#Class for local testing

import requests
import base64
from ClientId import *


class song_rec:
    """A class that holds song features, activity features, and genre; and returns recommendations. Taken from the Spotify API. Built with passion and a little frustration."""

    def __init__(self, song_ID, activity, time_of_day, genre):
        """
        Initial information and parameters for this class.
        """
        
        self.song_ID = song_ID
        self.activity = activity
        self.time_of_day = time_of_day
        self.genre = genre
        
        #information for parameters
        self.Night_parameters = {'acousticness': [0.051187302142530616, 0.2629954578833173, 0.5443586449949921, 0.8563105017492848], 'danceability': [0.28877092078723754, 0.527265145305271, 0.6994024737246376, 0.8441108936258267], 'energy': [0.14940366340223243, 0.4124318215497712, 0.5785720743553215, 0.7222509557052426, 0.8803082618937121], 'instrumentalness': [0.003154300485407463, 0.2800824849090645, 0.6309798578738262, 0.8978986216778286], 'liveness': [0.116978890214073, 0.329885867067773, 0.7033096435947523], 'loudness': [-30.64137521831628, -15.603954342871656, -8.693378697200863, -5.07960733626369], 'speechiness': [0.052176478894036496, 0.15368064548654295, 0.2870441191527784, 0.4474271751216467, 0.8835541269156066], 'tempo': [86.37858981732701, 118.81463727274055, 143.33951924769767, 171.02900275713338], 'valence': [0.1579563989441452, 0.3605310706961407, 0.5629927991264553, 0.8029163276483204]}
        self.Late_parameters = {'acousticness': [0.049949809712140913, 0.2633791209558357, 0.5370881542725334, 0.8437265006779745], 'danceability': [0.30523346735915535, 0.5302268567772025, 0.6971927179149737, 0.8420220511657784], 'energy': [0.1766360412743842, 0.4238905846017494, 0.5836049504130567, 0.725879848802168, 0.8823919712703309], 'instrumentalness': [0.00225718255117819, 0.20891297588059077, 0.534670951603013, 0.8806990178231385], 'liveness': [0.11627824550612773, 0.32849533114432083, 0.7051570025811635], 'loudness': [-28.98505860960978, -13.678014284931066, -8.156734747732266, -4.861113304031446], 'speechiness': [0.05143700109738447, 0.15243304211029943, 0.2858496263701379, 0.4464795422816943, 0.8824409548557065], 'tempo': [87.05773335178053, 118.54010041826814, 143.32254832967857, 171.47923963932607], 'valence': [0.16383742654916816, 0.36601329166123503, 0.5694534485407704, 0.8132943239116329]}
        self.Morning_parameters = {'acousticness': [0.05012978727729375, 0.26120192800380654, 0.5342786002849637, 0.8259961144478494], 'danceability': [0.35734433017038253, 0.550163883097234, 0.7037432928412931, 0.844481871770063], 'energy': [0.2278616062629496, 0.43661975426687616, 0.5870700648181575, 0.7247772182400434, 0.8771603576284381], 'instrumentalness': [0.002346945847100955, 0.21106105773388428, 0.5357265445356565, 0.8620154236919395], 'liveness': [0.11543620966331332, 0.3241461338729708, 0.6890639680896798], 'loudness': [-21.6538578554387, -11.768035238216033, -7.593397979955599, -4.681693120411834], 'speechiness': [0.050225236591527625, 0.14987548286751498, 0.2840914225122377, 0.44561481656521973, 0.8603198966542281], 'tempo': [88.1003960746221, 118.3973036567697, 143.29661575678807, 171.7191445745569], 'valence': [0.17831237255191656, 0.376512023338647, 0.5787601397253872, 0.8178244659412188]}
        self.Afternoon_parameters = {'acousticness': [0.050490359061721196, 0.26284748726402657, 0.5361432660991571, 0.8293365253027448], 'danceability': [0.3645331250385326, 0.5549705897000081, 0.7115274552461305, 0.8525255532474758], 'energy': [0.22170085305720916, 0.4345205314016501, 0.5864102592476328, 0.7252673337673063, 0.8772012590621703], 'instrumentalness': [0.002303065143175055, 0.2045831396598907, 0.523255839818788, 0.8566194039653546], 'liveness': [0.11571788233010737, 0.3247771442018822, 0.6880205858291473], 'loudness': [-22.858784742387314, -12.036591650596531, -7.734759920598487, -4.756980275230353], 'speechiness': [0.051331957540559595, 0.1529872791968842, 0.28566529769478033, 0.447316131793282, 0.8554854992562926], 'tempo': [88.128062894798, 118.80760057100012, 143.48446847875817, 171.29537448764688], 'valence': [0.1754206016542743, 0.36800937108790005, 0.5688401346289101, 0.8085758968840702]}
        self.Evening_parameters = {'acousticness': [0.051187302142530616, 0.2629954578833173, 0.5443586449949921, 0.8563105017492848], 'danceability': [0.28877092078723754, 0.527265145305271, 0.6994024737246376, 0.8441108936258267], 'energy': [0.14940366340223243, 0.4124318215497712, 0.5785720743553215, 0.7222509557052426, 0.8803082618937121], 'instrumentalness': [0.003154300485407463, 0.2800824849090645, 0.6309798578738262, 0.8978986216778286], 'liveness': [0.116978890214073, 0.329885867067773, 0.7033096435947523], 'loudness': [-30.64137521831628, -15.603954342871656, -8.693378697200863, -5.07960733626369], 'speechiness': [0.052176478894036496, 0.15368064548654295, 0.2870441191527784, 0.4474271751216467, 0.8835541269156066], 'tempo': [86.37858981732701, 118.81463727274055, 143.33951924769767, 171.02900275713338], 'valence': [0.1579563989441452, 0.3605310706961407, 0.5629927991264553, 0.8029163276483204]}
        
        self.Night_events = {'night', 'midnight', 'bedtime', "my friend's sleepover"}
        self.Late_events = {'the twilight zone', '5 AM', 'the crack of dawn'}
        self.Morning_events = {'breakfast', 'sunrise', 'my first Zoom lecture', 'my daily sprint meeting'}
        self.Afternoon_events = {'happy hour', 'sunset', 'rush hour', "5 o'clock somewhere"}
        self.Evening_events = {'8:09 PM', 'dinnertime', 'the afterparty', 'the Bachelor season premier',  'closing time'}

        self.parameters = None

        self.activities = {'on a run': [('acousticness', 0), ('danceability', 1), ('energy', 4), ('instrumentalness', 1), ('liveness', 0), ('loudness', 3), ('speechiness', 2), ('tempo', 3), ('valence', 2)], \
            'on a road trip': [('acousticness', 2), ('danceability', 3), ('energy', 3), ('instrumentalness', 2), ('liveness', 2), ('loudness', 1), ('speechiness', 0), ('tempo', 2), ('valence', 2)], \
                'going to bed': [('acousticness', 3), ('danceability', 0), ('energy', 1), ('instrumentalness', 2), ('liveness', 0), ('loudness', 1), ('speechiness', 2), ('tempo', 0), ('valence', 3)], \
                    'taking a shower': [('acousticness', 1), ('danceability', 2), ('energy', 2), ('instrumentalness', 0), ('liveness', 2), ('loudness', 3), ('speechiness', 1), ('tempo', 1), ('valence', 2)], \
                        'commuting to work': [('acousticness', 1), ('danceability', 1), ('energy', 3), ('instrumentalness', 1), ('liveness', 1), ('loudness', 2), ('speechiness', 4), ('tempo', 1), ('valence', 1)], \
                            'in the office': [('acousticness', 2), ('danceability', 0), ('energy', 2), ('instrumentalness', 2), ('liveness', 0), ('loudness', 0), ('speechiness', 1), ('tempo', 1), ('valence', 1)], \
                                'racing to a deadline': [('acousticness', 0), ('danceability', 2), ('energy', 4), ('instrumentalness', 2), ('liveness', 1), ('loudness', 2), ('speechiness', 2), ('tempo', 3), ('valence', 1)], \
                                    'cooking food': [('acousticness', 2), ('danceability', 2), ('energy', 3), ('instrumentalness', 0), ('liveness', 2), ('loudness', 1), ('speechiness', 1), ('tempo', 1), ('valence', 2)], \
                                        'washing the dishes': [('acousticness', 3), ('danceability', 1), ('energy', 1), ('instrumentalness', 2), ('liveness', 1), ('loudness', 2), ('speechiness', 2), ('tempo', 2), ('valence', 2)], \
                                            'studying for an exam': [('acousticness', 2), ('danceability', 1), ('energy', 2), ('instrumentalness', 3), ('liveness', 0), ('loudness', 0), ('speechiness', 1), ('tempo', 0), ('valence', 1)], \
                                                'enjoying the view': [('acousticness', 3), ('danceability', 1), ('energy', 1), ('instrumentalness', 2), ('liveness', 1), ('loudness', 0), ('speechiness', 0), ('tempo', 0), ('valence', 2)], \
                                                    'playing Mario Kart': [('acousticness', 1), ('danceability', 2), ('energy', 4), ('instrumentalness', 2), ('liveness', 0), ('loudness', 3), ('speechiness', 1), ('tempo', 3), ('valence', 3)], \
                                                        'drinking a mimosa': [('acousticness', 2), ('danceability', 1), ('energy', 1), ('instrumentalness', 1), ('liveness', 0), ('loudness', 1), ('speechiness', 1), ('tempo', 1), ('valence', 3)], \
                                                            'on the dance flooor': [('acousticness', 0), ('danceability', 3), ('energy', 4), ('instrumentalness', 0), ('liveness', 1), ('loudness', 2), ('speechiness', 1), ('tempo', 2), ('valence', 2)], \
                                                                'filing taxes': [('acousticness', 2), ('danceability', 0), ('energy', 0), ('instrumentalness', 3), ('liveness', 0), ('loudness', 0), ('speechiness', 0), ('tempo', 0), ('valence', 0)], \
                                                                    'about to rap battle': [('acousticness', 0), ('danceability', 2), ('energy', 4), ('instrumentalness', 0), ('liveness', 2), ('loudness', 3), ('speechiness', 3), ('tempo', 2), ('valence', 2)], \
                                                                        'feeling 22': [('acousticness', 1), ('danceability', 3), ('energy', 3), ('instrumentalness', 1), ('liveness', 2), ('loudness', 3), ('speechiness', 3), ('tempo', 2), ('valence', 3)], \
                                                                            'driving a golf kart': [('acousticness', 1), ('danceability', 1), ('energy', 1), ('instrumentalness', 2), ('liveness', 1), ('loudness', 1), ('speechiness', 1), ('tempo', 2), ('valence', 2)], \
                                                                                'walking the dog': [('acousticness', 1), ('danceability', 1), ('energy', 2), ('instrumentalness', 2), ('liveness', 1), ('loudness', 1), ('speechiness', 2), ('tempo', 2), ('valence', 2)], \
                                                                                    'getting a pedicure': [('acousticness', 2), ('danceability', 0), ('energy', 1), ('instrumentalness', 3), ('liveness', 0), ('loudness', 0), ('speechiness', 1), ('tempo', 1), ('valence', 2)], \
                                                                                        'writing an angry Yelp review': [('acousticness', 1), ('danceability', 0), ('energy', 4), ('instrumentalness', 1), ('liveness', 1), ('loudness', 3), ('speechiness', 4), ('tempo', 3), ('valence', 0)]}
        
        #parameters for GET
        self.artist_ID = None
        self.acousticness = None
        self.danceability = None
        self.energy = None
        self.instrumentalness = None
        self.liveness = None
        self.loudness = None
        self.speechiness = None
        self.tempo = None
        self.valence = None

        #dictionary of songs and info... or the error message
        self.output = {}

    # def get_song_ID(self):
    #     start = str(self.song_link).find('track/') + 6
    #     end = str(self.song_link).find('?')
    #     ID = str(self.song_link)[start:end]
    #     self.song_ID = ID
    #     return ID

    def get_artist_id(self):
        """
        Uses the Spotify API to get the artist ID, which will then be used to generate song recommendations
        """

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

        song_url = f"https://api.spotify.com/v1/tracks/{self.song_ID}"
        token_header = {
            "Authorization": "Bearer " + token
        }

        res = requests.get(url = song_url, headers = token_header)
        try:
            self.artist_ID = res.json()['album']['artists'][0]['id']
        except:
            self.output = 'Error 400: This is not a valid song ID.'

    def get_parameters(self):
        """
        Looks at the time of day and picks the appropriate set of parameters, which will then be used to generate song recommendations
        """
        try:
            if self.time_of_day in self.Night_events:
                self.parameters = self.Night_parameters
            elif self.time_of_day in self.Late_events:
                self.parameters = self.Late_parameters
            elif self.time_of_day in self.Morning_events:
                self.parameters = self.Morning_parameters
            elif self.time_of_day in self.Afternoon_events:
                self.parameters = self.Afternoon_parameters
            elif self.time_of_day in self.Evening_events:
                self.parameters = self.Evening_parameters
            else:
                raise ValueError('This is not a time of day we accounted. I blame Martin.')
        except:
            self.output = "Error 003: This is embarassing... it seems as if we had not accounted for this time of day. We will take a closer look at this!"
        

    def get_activity_parameters(self):
        """
        Remember to first get the set of parameters with self.get_parameters()
        This function looks at the activity and chooses the appropriate parameter values, which will be used directly in the API call for song recommendations
        """
        try:
            list = self.activities[self.activity]

            (xa, ya) = list[0]
            self.acousticness = self.parameters[xa][ya]
            (xd, yd) = list[1]
            self.danceability = self.parameters[xd][yd]
            (xe, ye) = list[2]
            self.energy = self.parameters[xe][ye]
            (xi, yi) = list[3]
            self.instrumentalness = self.parameters[xi][yi]
            (xl1, yl1) = list[4]
            self.liveness = self.parameters[xl1][yl1]
            (xl2, yl2) = list[5]
            self.loudness = self.parameters[xl2][yl2]
            (xs, ys) = list[6]
            self.speechiness = self.parameters[xs][ys]
            (xt, yt) = list[7]
            self.tempo = self.parameters[xt][yt]
            (xv, yv) = list[8]
            self.valence = self.parameters[xv][yv]
        except:
            if self.output == {}:
                self.output = "Error 002: Yikes! We did not account for this activity. Don't worry, we want this fixed as much as you do."

    def get_song_recommendations(self):
        """
        Remember to first call the functions self.get_artist_id() and self.get_activity_parameters()
        This function uses all the parameters provided and returns 12 song recommendations. We hope you enjoy them!
        """

        if self.output == {}:
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

            rec_url = f"https://api.spotify.com/v1/recommendations?limit=12&market=US&seed_artists={self.artist_ID}&seed_genres={self.genre}&seed_tracks={self.song_ID}&target_acousticness={self.acousticness}&target_danceability={self.danceability}&target_energy={self.energy}&target_instrumentalness={self.instrumentalness}&target_liveness={self.liveness}&target_loudness={self.loudness}&target_speechiness={self.speechiness}&target_tempo={self.tempo}&target_valence={self.valence}"
            token_header = {
                "Authorization": "Bearer " + token
            }

            res = requests.get(url = rec_url, headers = token_header)    
            tracks_api = res.json()
            for i in range(len(tracks_api['tracks'])):
                print(tracks_api['tracks'][i]['external_urls']['spotify'])
                self.output[tracks_api['tracks'][i]['external_urls']['spotify'][31:]] = [tracks_api['tracks'][i]['name'], tracks_api['tracks'][i]['album']['artists'][0]['name'], tracks_api['tracks'][i]['album']['name'], tracks_api['tracks'][i]['album']['release_date'][:4], tracks_api['tracks'][i]['popularity']]

test = song_rec('1MekQcRadmgfYGjFgpl8iS', 'taking a shower', '8:09 PM', 'alternative')
test.get_artist_id()
test.get_parameters()
test.get_activity_parameters()
test.get_song_recommendations()
print(test.output)