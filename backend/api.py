from flask import Flask
from flask_cors import CORS
from pycoingecko import CoinGeckoAPI

from utils import crypto_coin_list, coin_currencies

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
cg = CoinGeckoAPI()


@app.route('/api/coins', methods=['GET'])
def get_coins():
    return cg.get_price(crypto_coin_list, coin_currencies)


if __name__ == '__main__':
    app.run(debug=True)
