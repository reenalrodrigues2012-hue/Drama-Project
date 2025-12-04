const mongoose = require('mongoose');

const workshopSchema = new mongoose.Schema({
    name: { type: String, required: true },
    participantCount: { type: Number, default: 0 }
});

module.exports = mongoose.model('Workshop', workshopSchema);
