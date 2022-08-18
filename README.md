# GraphQl Service


## Description

Imagine we have a couple of microservices that are created for the service Musicify, a new wikipedia for Music. We need to provide a comfortable and convenient service for our users to manage and retrieve data for different entities.

You can find repository with microservices [here](https://github.com/rolling-scopes-school/node-graphql-service)

The following entities exist:

`Artist`, `User`, `Band`, `Genre`, `Track`, `Album`, `Favourite` 

**Details:**

1. For each entity there is a separate microservice, you can find all microservices in corresponding repositories:

 - Artists service
 - Users service
 - Bands service
 - Genres service
 - Tracks service
 - Favourites service
 - Albums service

Instructions on how to launch can be found in service readme.md file.

**GraphQl app**

In this app the following queries was created:

- artist
- artists
- genre
- genres
- track
- tracks
- band
- bands
- album
- albums
- jwt
- user
- favourites (available only for logged in user)

The following mutation was created:

- Artists
  - create/update/delete Artist
- Genres
  - create/update/delete Genres
- Bands
  - create/update/delete Bands
- Tracks
  - create/update/delete Tracks
- Albums
  - create/update/delete Albums
- Users
  - register
- Favourites
  - addTrackToFavourites
  - addBandToFavourites
  - addArtistToFavourites
  - addGenreToFavourites

**Mutation requests is available only for logged in users. (except Users.register)**

### How to run

1. At first clone or download repo with microservices
2. Create your own MongoDb and put down it's host into .env file in each microservice
3. Run microservices
4. Clone this repo
5. Rename file .env.example as .env
6. Run command `npm install` and then `npm run start`

 By default application server will start on localhost:4001

### How to start

1. Register a user with mutation `register`. Into input fields you should send data into JSON format. For example:
```json
{
  "input": {
    "firstName": "MyName",
    "lastName": "MyLastName",
    "password": "118649qwe",
    "email": "qwerty@gmail.com"
 }
}
```
2. Login your created user with query `jwt`. Into input fields you should send data into JSON format. For example:
```json 
{       
    "email": "qwerty@gmail.com",
    "password": "118649qwe"
}
```
In response you will get a JWT token, copy it. To make another mutations with data you must send this token in "Authorization" Headers of your requests. (Write it down without "Bearer")
![authorization_picture](/images/authorization.png)

### Examples of requests
 Query Favourites: 
 ```graphql
 query Favourites {
  favourites {
    id
    userId
    bands {
      name
    }
  }
}
 ```
Response:
```json
{
  "data": {
    "favourites": {
      "id": "62c9315b69d978b341eaafc6",
      "userId": "62c5cd23b9037bc7b3bface3",
      "bands": [
        {
          "name": "testBand2"
        }
      ]
    }
  }
}
```


Mutation create Genre:
```graphql
mutation Mutation($input: GenreInput!) {
  createGenre(input: $input) {
    id
    name
    description
    country
    year
  }
}
```
Variable input:
```json
{
  "input": {
        "name": "rumba",
        "description": "des",
        "country": "UK",
        "year": 1956 
  }
}
```


Mutation update Artist:
```graphql
mutation Mutation($updateArtistId: ID!, $input: ArtistInputUpdate!) {
  updateArtist(id: $updateArtistId, input: $input) {
    id
    firstName
    secondName
    middleName
    birthDate
    birthPlace
    country
    instruments
  }
}
```
Variables input and ID of Artist:
```json
{
  "updateArtistId": "62bd7ae8d9c27d98936c4576",
  "input": {
    "firstName": "NewName",
    "secondName": "NewSecondName",
    "middleName":"NewMiddleName",
    "country": "Swiss",
    "birthDate": "18/12/1970",
    "birthPlace": "NewCountry",
    "instruments": ["guitar", "piano"]
  }
}
```


### Here is how it should look in the browser:

![favourites_image](/images/Favourites.png)
![artist_response_image](/images/response_Artists.png)
