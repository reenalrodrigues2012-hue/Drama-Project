const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: String,
    plays: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Play' }]
});

module.exports = mongoose.model('Venue', venueSchema);
