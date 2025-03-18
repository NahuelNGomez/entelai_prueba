from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

import csv

app = Flask(__name__)
CORS(app)

def load_movies():
    movies = []
    with open("./data/movies.csv", newline="", encoding="utf-8") as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            movies.append(row)
    return movies

@app.route("/movies", methods=["GET"])
def get_movies():
    movies = load_movies()
    title = request.args.get("title")

    if title:
        movies = [movie for movie in movies if title.lower() in movie["title"].lower()]

    return jsonify(movies)

if __name__ == "__main__":
    app.run(debug=True)