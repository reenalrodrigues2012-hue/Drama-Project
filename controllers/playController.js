const Play = require('../models/Play');

exports.createPlay = async (req, res) => {
    try {
        const play = new Play(req.body);
        await play.save();
        res.status(201).json(play);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
