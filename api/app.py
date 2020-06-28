from flask import Flask, request,abort
import db_connection



app = Flask(__name__)

@app.route('/')
def index():
    return ('hello world this is flask')


@app.route('/results', methods = ['POST'])
def getResults():
    results = request.get_json()
    top_three = get_top_three(results)
    data = {}
    for category in top_three:
        data[category] = db_connection.getResourcesForKeyword(category)
    return(data)

def get_top_three(quiz_results):
    results_dict = dict(quiz_results)
    sorted_results = sorted(results_dict.items(),key=lambda x: x[1], reverse=True)
    top_three = [sorted_results[0][0],sorted_results[1][0], sorted_results[2][0]]
    return top_three
