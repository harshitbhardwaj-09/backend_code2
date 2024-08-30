
    const Seminar = require('../models/Seminar');

    const scheduleSeminar = async (req, res) => {
    const { topic, description, createdBy, scheduledAt } = req.body;
    const documents = req.files.map(file => file.path);

    try {
        const seminar = new Seminar({ topic, description, createdBy, scheduledAt, documents });
        await seminar.save();

        res.json(seminar);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
    };

    module.exports = { scheduleSeminar };



