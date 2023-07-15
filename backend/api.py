from flask import Flask
from pycoingecko import CoinGeckoAPI

from backend.utils import crypto_coin_list, coin_currencies

app = Flask(__name__)
cg = CoinGeckoAPI()


@app.route('/coins', methods=['GET'])
def get_coins():
    return cg.get_price(crypto_coin_list, coin_currencies)


if __name__ == '__main__':
    app.run(debug=True)
