    const mongoose = require('mongoose');

    const ForumSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    posts: [
        {
        author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        content: { type: String, required: true },
        attachments: [{ type: String }],
        timestamp: { type: Date, default: Date.now },
        },
    ],
    });

    module.exports = mongoose.model('Forum', ForumSchema);
