    const mongoose = require('mongoose');

    const SeminarSchema = new mongoose.Schema({
    topic: { type: String, required: true },
    description: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    scheduledAt: { type: Date, required: true },
    documents: [{ type: String }],
    attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    });

    module.exports = mongoose.model('Seminar', SeminarSchema);
