from flask import Flask
from pycoingecko import CoinGeckoAPI

from backend.utils import crypto_coin_list, coin_currencies, error_message

app = Flask(__name__)
cg = CoinGeckoAPI()


@app.route('/price/<coin>', methods=['GET'])
def get_price(coin):
    if coin in crypto_coin_list:
        return cg.get_price(coin, coin_currencies)
    else:
        return error_message['invalid_coin']


if __name__ == '__main__':
    app.run(debug=True)
