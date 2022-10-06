
# New Girl API

A REST api to retrieve New Girl quotes when needed (which is pretty much always 💁‍♀️)


Currently hosted at: https://newgirlapi.herokuapp.com/ 


![This is an image](https://github.com/zahwah-codes/newgirl-api/blob/55b1dd378dcaf6ea0baadbee04846c268c5c1ee7/giphy.gif)


## REST APIs

### `GET /quotes`
Returns an array with all quotes:
```javascript
[
    {
    name: "schmit",
    season: 1,
    episode: 3,
    episodeName: "Wedding",
    quote: "So what I need you to do is this. I need you to put vodka in a water bottle, ok? Then rendezvous with me in the restroom."
    },
    {
    name: "winston",
    season: 1,
    episode: 24,
    episodeName: "See Ya",
    quote: "I'm worried about Schmidt, he's a Jew in the desert I don't want him to wander."
    },
    {
    name: "schmidt",
    season: 1,
    episode: 23,
    episodeName: "Backslide",
    quote: "Old people freak me out. With their hands and their legs. They're like the people version of pleated pants."
    }
]
```

### `GET /quotes/random`
Returns an array with a single random quote object
```javascript
{
    name: “cece”,
    season: 1,
    episode: 15,
    episodeName: “Injured",
    quote: "Are you using your friends medical crisis to feel my boobs with your face?"
}
```

### `GET /quotes/name/<name>`

Returns an array with `<name>` quotes e.g. `GET /name/jess`.
Currently supporting: Winston, Schmidt, Jess, Nick, Cece, Coach.

** The `name` query parameter is case-insensitive. For example: /api/quotes/name/coach. Names should be in lowercase. 

```javascript
[
    {
    name: “jess”,
    season: 5,
    episode: 21,
    episodeName: “Wedding Eve”,
    quote: "What is this? The last night of drama camp?"
    },
    {
    name: “jess”,
    season: 2,
    episode: 25,
    episodeName: “Elaine’s Big Day”
    quote: "I don't think the badger's actually rabid, I think he's just kind of a dick."
    },
    {
    name: “jess”,
    season: 1,
    episode: 23,
    episodeName: “Backslide”,
    quote: "Paul is the all-time worst crier. It's like a slow motion sneeze."  
    }
]
```

### `GET /quotes/season/<season number>`

Returns an array with `<season number>` quotes e.g. `GET /season/3`.

```javascript
[
    {
     name: “nick”,
     season: 3,
     episode: 3,
     episodeName: “Double Date”,
     quote: “I'm not convinced I know how to read, I've just memorized a lot of words.”
    },
    {
    name: “coach”,
    season: 3,
    episode: 19,
    episodeName: “Fired Up”,
    quote: “I don't like kids, I don't like teaching, I just like paychecks.”
    },
    {
    name: “schmidt”,
    season: 3,
    episode: 9,
    episodeName: “Longest Night Ever”,
    quote: “She's on a flip-phone. That means she's either poor, or a time traveler!”
    }
]
```

# Built With

* [Express](https://expressjs.com/) - The Node framework used to create a REST API that can interact with the database

* [MongoDB](https://www.mongodb.com/) - The database used to store and retrieve quotes
