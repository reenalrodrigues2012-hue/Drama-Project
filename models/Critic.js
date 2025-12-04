const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    play: { type: mongoose.Schema.Types.ObjectId, ref: 'Play' },
    score: { type: Number, min: 0, max: 10 }
});

const criticSchema = new mongoose.Schema({
    name: { type: String, required: true },
    reviews: [reviewSchema]
});

module.exports = mongoose.model('Critic', criticSchema);
