const mongoose = require('mongoose');


const StatusSchema = new mongoose.Schema({
status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed', 'On Hold'],
    default: 'Pending',
},
updatedAt: {
    type: Date, default: Date.now,
},
});


const ConflictSchema = new mongoose.Schema({
description: {
    type: String,
    required: true,
},
reportedAt: {
    type: Date,
    default: Date.now,
},
resolved: {
    type: Boolean,
    default: false,
},
});


const LocationSchema = new mongoose.Schema({
area: {
    type: String,
    required: true,
},
district: {
    type: String,
    required: true,
},
state: {
    type: String,
    required: true,
},
});

const NotificationSchema = new mongoose.Schema({
message: {
    type: String,
    required: true,
},
sentAt: {
    type: Date,
    default: Date.now,
},
read: {
    type: Boolean,
    default: false,
},
});


const ProjectSchema = new mongoose.Schema({
name: {
    type: String,
    required: true,
},
description: {
    type: String,
    required: true,
},
status: StatusSchema,  
conflicts: [ConflictSchema],  
location: LocationSchema,  
notifications: [NotificationSchema],  
createdAt: {
    type: Date,
    default: Date.now,
},
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
