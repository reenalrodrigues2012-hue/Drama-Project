const Workshop = require('../models/Workshop');

exports.createWorkshop = async (req, res) => {
    try {
        const workshop = new Workshop(req.body);
        await workshop.save();
        res.status(201).json(workshop);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
