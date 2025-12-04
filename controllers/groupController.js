const TheatreGroup = require('../models/TheatreGroup');

exports.createGroup = async (req, res) => {
    try {
        const group = new TheatreGroup(req.body);
        await group.save();
        res.status(201).json(group);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
