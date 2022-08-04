const express = require('express')
const characters = require('../models/characters')
const router = express.Router()
const Character = require ('../models/characters')

// Getting all Quotes
router.get('/quotes', async (req, res) => {
    try {
        const characters = await Character.find()
        res.json(characters)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Getting One Quote
router.get('/:id', getCharacter,(req, res) => {
    res.json(res.character)
})

// Creating One Quote
router.post('/new', async (req, res) => {
    const character = new Character ({
        name: req.body.name,
        season: req.body.season,
        episode: req.body.episode,
        episodeName: req.body.episodeName,
        quote: req.body.quote
        })
        
    try {
        const newCharacter = await character.save()
        res.status(201).json(newCharacter)
    } catch(err) {
        res.status(400).json({message: err.message})
    }
})

// Updating One Quote
router.patch('/:id', getCharacter, async (req, res) => {
    if (req.body.name != null) {
        res.character.name = req.body.name
      }
      if (req.body.season != null) {
        res.character.season = req.body.season
      }
      if (req.body.episode != null) {
        res.character.episode = req.body.episode
      }
      if (req.body.episodeName != null) {
        res.character.episodeName = req.body.episodeName
      }
      if (req.body.quote != null) {
        res.character.quote = req.body.quote
      }
      try {
        const updatedCharacter = await res.character.save()
        res.json(updatedCharacter)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }
})

// Deleting One Quote
router.delete('/:id', getCharacter, async (req, res) => {
    try {
        await res.character.remove()
        res.json({ message: 'Deleted character' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getCharacter(req, res, next) {
    let character
    try {
        character = await Character.findById(req.params.id)
        if (character == null) {
            return res.status(404).json({ message: 'Cannot find character' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.character = character
    next()
}

// Getting random quote

router.get('/quotes/random', async (req, res) => {
    const count = await Character.countDocuments();
    const random = Math.floor(Math.random() * count);
    const q = await Character.findOne().skip(random)
}) 

// Getting quote by Character 

router.get('/quotes/name/:name', async (req, res) => {

    try {
        const query = await Character.find({name: req.params.name})
        res.json(query)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});

// Getting quote by Season

router.get('/quotes/season/:season', async (req, res) => {
try {
    const query = await Character.find({season: req.params.season})
    res.json(query)
} catch (err) {
    res.status(500).json({ message: err.message })
}
});


module.exports = router