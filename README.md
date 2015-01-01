# endpoints-example
> An example API using Endpoints.

# Setup Instructions

1. Clone repo
2. `npm install`
3. `npm start`
4. Open browser to (for example):
  - [http://localhost:8080](http://localhost:8080)
  - [http://localhost:8080/v1/authors](http://localhost:8080/v1/authors)
  - [http://localhost:8080/v1/authors/1](http://localhost:8080/v1/authors/1)
  - [http://localhost:8080/v1/authors/1,2](http://localhost:8080/v1/authors/1,2)
  - [http://localhost:8080/v1/authors?include=books](http://localhost:8080/v1/authors?include=books)
  - [http://localhost:8080/v1/authors?alive=true](http://localhost:8080/v1/authors?alive=true)
  - [http://localhost:8080/v1/authors?dead=true](http://localhost:8080/v1/authors?dead=true)
  - [http://localhost:8080/v1/books?include=chapters,author](http://localhost:8080/v1/books?include=chapters,author)
  - [http://localhost:8080/v1/books?include=first_chapter](http://localhost:8080/v1/books?include=first_chapter)
  - [http://localhost:8080/v1/books?published_before=1990-01-01](http://localhost:8080/v1/books?published_before=1990-01-01)
  - [http://localhost:8080/v1/books?published_after=1990-01-01](http://localhost:8080/v1/books?published_after=1990-01-01)
  - [http://localhost:8080/v1/chapters?book_id=1](http://localhost:8080/v1/chapters?book_id=1)
  - [http://localhost:8080/v1/chapters/1](http://localhost:8080/v1/chapters/1)
