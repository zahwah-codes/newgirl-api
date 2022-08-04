
# New Girl API

A REST api to retrieve New Girl quotes when needed (which is pretty much always 💁‍♀️)

This is the simplest server supporting both REST and MongoDB

Currently hosted at: 

![This is an image]()


## REST APIs

### `GET /quotes`
Returns an array with all quotes:
```javascript
[
    {
    name: ‘Schmit,
	season: 1,
    episode: 3,
    episodeName: "Wedding",
    quote: "So what I need you to do is this. I need you to put vodka in a water bottle, ok? Then rendezvous with me in the restroom."
    },
    {
    name: "Winston",
    season: 1,
    episode: 24,
    episodeName: "See Ya",
    quote: "I'm worried about Schmidt, he's a Jew in the desert I don't want him to wander."
    },
    {
	name: "Schmidt",
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
    name: “Cece”,
	season: 1,
	episode: 15,
	episodeName: “Injured",
    quote: "Are you using your friends medical crisis to feel my boobs with your face?"
}
```

### `GET /quotes/name/<name>`

Returns an array with `<name>` quotes e.g. `GET /name/jess`.
Currently supporting: Winston, Schmidt, Jess, Nick, Cece, Coach

```javascript
[
    {
    name: “Jess”,
    season: 5,
	episode: 21,
	episodeName: “Wedding Eve”,
    quote: "What is this? The last night of drama camp?"
    },
    {
    name: “Jess”,
    season: 2,
	episode: 25,
	episodeName: “Elaine’s Big Day”
    quote: "I don't think the badger's actually rabid, I think he's just kind of a dick."
    },
    {
     name: “Jess”,
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
       name: “Nick”,
	season: 3,
	episode: 3,
	episodeName: “Double Date”,
        quote: “I'm not convinced I know how to read, I've just memorized a lot of words.”
    },
    {
    name: “Coach”,
	season: 3,
	episode: 19,
	episodeName: “Fired Up”,
	quote: “I don't like kids, I don't like teaching, I just like paychecks.”
    },
    {
    name: “Schmidt”,
	season: 3,
	episode: 9,
	episodeName: “Longest Night Ever”,
	quote: “She's on a flip-phone. That means she's either poor, or a time traveler!”
    }
]
```