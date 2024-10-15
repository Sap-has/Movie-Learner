import json
import os

print(os.listdir())

with open('movies.txt', 'r') as file:
    imdb_ids = [line.strip() for line in file.readlines()]

movies_json = [{"imdbID": imdb_id} for i, imdb_id in enumerate(imdb_ids)]

with open('movies.json', 'w') as json_file:
    json.dump(movies_json, json_file, indent=2)

print("JSON file created successfully: movies.json")
