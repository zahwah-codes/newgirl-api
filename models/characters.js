const mongoose = require ('mongoose')

const newGirlSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },

    season: {
        type: Number,
        required: true
    }, 

    episode: {
        type: Number,
        required: true
    }, 

    episodeName: {
        type: String,
        required: true
    },

    quote: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Character', newGirlSchema)