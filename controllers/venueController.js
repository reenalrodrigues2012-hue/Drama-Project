const Venue = require('../models/Venue');

exports.createVenue = async (req, res) => {
    try {
        const venue = new Venue(req.body);
        await venue.save();
        res.status(201).json(venue);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
