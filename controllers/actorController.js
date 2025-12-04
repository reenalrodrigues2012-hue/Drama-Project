const Actor = require('../models/Actor');

exports.createActor = async (req, res) => {
    try {
        const actor = new Actor(req.body);
        await actor.save();
        res.status(201).json(actor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
