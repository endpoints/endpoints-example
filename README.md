# endpoints-example
> an example api written using endpoints

# Setup Instructions

1. Clone repo
2. `npm install`
3. `npm start`
4. Open browser to (for example):
  - [http://localhost:8080](http://localhost:8080)
  - [http://localhost:8080/v1](http://localhost:8080/v1)
  - [http://localhost:8080/v1/authors](http://localhost:8080/v1/authors)
  - [http://localhost:8080/v1/authors/1](http://localhost:8080/v1/authors/1)
  - [http://localhost:8080/v1/authors/?filter[id]=1,2](http://localhost:8080/v1/authors/?filter[id]=1,2)
  - [http://localhost:8080/v1/authors?include=books](http://localhost:8080/v1/authors?include=books)
  - [http://localhost:8080/v1/authors?filter[alive]=true](http://localhost:8080/v1/authors?filter[alive]=true)
  - [http://localhost:8080/v1/authors?filter[dead]=true](http://localhost:8080/v1/authors?filter[dead]=true)
  - [http://localhost:8080/v1/books?include=chapters,author](http://localhost:8080/v1/books?include=chapters,author)
  - [http://localhost:8080/v1/books?include=first_chapter](http://localhost:8080/v1/books?include=first_chapter)
  - [http://localhost:8080/v1/books?filter[published_before]=1990-01-01](http://localhost:8080/v1/books?filter[published_before]=1990-01-01)
  - [http://localhost:8080/v1/books?filter[published_after]=1990-01-01](http://localhost:8080/v1/books?filter[published_after]=1990-01-01)
  - [http://localhost:8080/v1/chapters?filter[id]=1](http://localhost:8080/v1/chapters?filter[id]=1)
  - [http://localhost:8080/v1/chapters/1](http://localhost:8080/v1/chapters/1)

For more details on how to interact with this API, see the [JSON-API Specification](http://jsonapi.org)
