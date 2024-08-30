const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed'],
        default: 'pending'
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    dueDate: {
        type: Date
    },
    assignedTo: {
        type: String,
        trim: true
    },
    department: {
        type: String,
        required: true,
        trim: true
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true
    },
    resources: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resource'
    }]
});


const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
