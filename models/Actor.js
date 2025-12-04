const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    plays: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Play' }]
});

module.exports = mongoose.model('Actor', actorSchema);
