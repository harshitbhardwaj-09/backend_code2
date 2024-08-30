const mongoose = require('mongoose');


const CommunicationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    department: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    tags: [{
        type: String,
        trim: true
    }]
});


const Communication = mongoose.model('Communication', CommunicationSchema);

module.exports = Communication;
