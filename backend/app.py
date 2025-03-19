from flask import Flask, request, jsonify
from flask_cors import CORS
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

MOVIES = load_movies()


@app.route("/movies", methods=["GET"])
def get_movies():
    title = request.args.get("title", "").lower()
    limit = int(request.args.get("limit", 20))
    offset = int(request.args.get("offset", 0))

    filtered_movies = [movie for movie in MOVIES if title in movie["title"].lower()] if title else MOVIES

    paginated_movies = filtered_movies[offset : offset + limit]

    response = {
        "total": len(filtered_movies),
        "limit": limit,
        "offset": offset,
        "movies": paginated_movies,
    }

    return jsonify(response)

if __name__ == "__main__":
    app.run(debug=True)