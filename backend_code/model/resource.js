const mongoose = require('mongoose');


const ResourceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    availability: {
        type: String,
        enum: ['available', 'in-use', 'maintenance', 'reserved'],
        default: 'available'
    },
    department: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    location: {
        type: String,
        trim: true
    },
    assignedProject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }
});


const Resource = mongoose.model('Resource', ResourceSchema);

module.exports = Resource;
