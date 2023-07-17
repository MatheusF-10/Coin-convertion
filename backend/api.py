import traceback
from datetime import datetime

from flask import Flask, jsonify
from flask_cors import CORS
from pycoingecko import CoinGeckoAPI

from utils import crypto_coin_list, coin_currencies, error_message

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
cg = CoinGeckoAPI()


class APIError(Exception):
    """All custom API Exceptions"""
    pass


class ParameterError(APIError):
    code = 400
    description = "Invalid Parameter Error"


class ServerError(APIError):
    code = 500
    description = "Internal Server Error"


@app.errorhandler(APIError)
def handle_exception(err):
    """Return custom JSON when APIError or its children are raised"""
    response = {"error": err.description, "message": ""}
    if len(err.args) > 0:
        response["message"] = err.args[0]
    # Add some logging so that we can monitor different types of errors
    app.logger.error(f"{err.description}: {response['message']}")
    return jsonify(response), err.code


@app.errorhandler(500)
def handle_exception(err):
    """Return JSON instead of HTML for any other server error"""
    app.logger.error(f"Unknown Exception: {str(err)}")
    app.logger.debug(''.join(traceback.format_exception(etype=type(err), value=err, tb=err.__traceback__)))
    response = {"error": "Sorry, that error is on us, please contact support if this wasn't an accident"}
    return jsonify(response), 500


@app.route('/api/coins', methods=['GET'])
def get_coins():
    return cg.get_price(crypto_coin_list, coin_currencies)


@app.route('/api/coins/chart/<days>', methods=['GET'])
def get_coin_market_chart(days):
    try:
        response = dict()
        for crypto_coin in crypto_coin_list:
            response[crypto_coin] = dict()
            for coin in coin_currencies:
                data = cg.get_coin_market_chart_by_id(crypto_coin, coin, days)
                timestamps = data['prices']
                prices = [price[1] for price in timestamps]
                timestamps = [datetime.fromtimestamp(price[0] / 1000) for price in timestamps]
                response[crypto_coin][coin] = {'timestamps': timestamps, 'prices': prices}
        return response
    except ValueError:
        raise ServerError(error_message['days_limit'])
    except Exception:
        raise ParameterError(error_message['server_error'])


if __name__ == '__main__':
    app.run(debug=True)
