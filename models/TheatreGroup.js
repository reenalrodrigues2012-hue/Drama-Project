const mongoose = require('mongoose');

const theatreGroupSchema = new mongoose.Schema({
    name: { type: String, required: true },
    plays: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Play' }],
    awards: [String]
});

module.exports = mongoose.model('TheatreGroup', theatreGroupSchema);
