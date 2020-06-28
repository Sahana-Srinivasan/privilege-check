from pymongo import MongoClient
import bson.json_util as json_util


url = ""
client = MongoClient(url)

db = client['privilege-res']
collection = db.resources


def getResourcesForKeyword(keyword):
    all_docs = collection.find({"tags":keyword})
    return json_util.dumps(all_docs)

