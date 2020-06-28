from pymongo import MongoClient
import bson.json_util as json_util


url = "mongodb://privilegechecker:vX2susagNeEC5FZQUFzJc9QdVaZtuLcP7F5l6rgvDRioNwmN64BadFUiC87EcDCYfuKRYrew17h0ANPqM7izGw==@privilegechecker.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@privilegechecker@"
client = MongoClient(url)

db = client['privilege-res']
collection = db.resources


def getResourcesForKeyword(keyword):
    all_docs = collection.find({"tags":keyword})
    return json_util.dumps(all_docs)

