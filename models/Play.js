const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    critic: { type: mongoose.Schema.Types.ObjectId, ref: 'Critic' },
    score: { type: Number, min: 0, max: 10 }
});

const playSchema = new mongoose.Schema({
    name: { type: String, required: true },
    language: String,
    genre: String,
    venues: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Venue' }],
    ratings: [ratingSchema],
    awards: [String],
    theatreGroup: { type: mongoose.Schema.Types.ObjectId, ref: 'TheatreGroup' },
    actors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Actor' }]
});

module.exports = mongoose.model('Play', playSchema);
