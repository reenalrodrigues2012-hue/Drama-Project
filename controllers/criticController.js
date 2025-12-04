const Critic = require('../models/Critic');

exports.createCritic = async (req, res) => {
    try {
        const critic = new Critic(req.body);
        await critic.save();
        res.status(201).json(critic);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
