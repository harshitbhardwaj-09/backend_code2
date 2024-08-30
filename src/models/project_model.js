const mongoose = require('mongoose');


const ProjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    department: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        trim: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date
    },
    status: {
        type: String,
        enum: ['planned', 'in-progress', 'completed'],
        default: 'planned'
    },
    resources: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resource' 
    }],
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task' 
    }],
    communications: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Communication' 
    }]
});


const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
