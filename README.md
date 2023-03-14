# URL Shortener Microservice

This project is a RESTful API for shortening URLs. Users can POST a long URL to the API and receive a shortened URL as a response. The API also includes an endpoint for redirecting users from the shortened URL to the original URL. If a user provides an invalid URL, the API returns an error message.

## API Endpoints

The API has the following endpoints:

- `POST /api/shorturl`: accepts a long URL and returns a shortened URL
- `GET /<short_url>`: redirects the user to the original URL associated with the given short URL

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Docker
- Pug

## Getting Started

### Installation

1. Clone the repository:

```
git clone https://github.com/kafwe/url-shortener.git

cd url-shortener
```

2. Create a `.env` file in the root of the project and add the following environment variables:

```
# MongoDB connection settings
MONGODB_USER=your_mongodb_username
MONGODB_PASSWORD=your_mongodb_password
MONGODB_DATABASE=your_mongodb_database_name
MONGODB_DOCKER_PORT=27017
MONGODB_LOCAL_PORT=27017

# Node.js server settings
NODE_ENV=development
NODE_LOCAL_PORT=3000
NODE_DOCKER_PORT=3000
```

### Running with Docker Compose

Make sure you have Docker and Docker Compose installed.

Run the following command to start the app and MongoDB:

```
docker compose up
```

The API is now running on `http://localhost:3000`. You can test the API by visiting `http://localhost:3000` in your browser or using a tool such as [Postman](https://www.postman.com/).

## Acknowledgements

freeCodeCamp.org for the [project prompt](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/exercise-tracker).
