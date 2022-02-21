import flask
import json

app = flask.Flask(__name__, template_folder = 'question')
app.secret = "super secret key"

@app.route('/')
@app.route('/questionAPI', methods = ['GET'])
def main():
    if flask.request.method == 'GET':
        return get_questions()

def get_questions():
    with open('question.json', 'r') as file:
        question = json.load(file)
        response = flask.jsonify(question)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

if __name__ == '__main__':
    app.run()
