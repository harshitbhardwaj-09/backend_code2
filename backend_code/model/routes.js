const express = require('express');
const router = express.Router();


const Project = require('./models/Project');
const Resource = require('./models/Resource');
const Task = require('./models/Task');
const Communication = require('./models/Communication');


router.post('/projects', async (req, res) => {
    try {
        const newProject = new Project(req.body);
        const project = await newProject.save();
        res.json(project);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Get all projects
router.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Resource Routes

// Create a new resource
router.post('/resources', async (req, res) => {
    try {
        const newResource = new Resource(req.body);
        const resource = await newResource.save();
        res.json(resource);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Get all resources
router.get('/resources', async (req, res) => {
    try {
        const resources = await Resource.find().populate('assignedProject');
        res.json(resources);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Task Routes

// Create a new task
router.post('/tasks', async (req, res) => {
    try {
        const newTask = new Task(req.body);
        const task = await newTask.save();
        res.json(task);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Get all tasks
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find().populate('project resources');
        res.json(tasks);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


router.post('/communications', async (req, res) => {
    try {
        const newCommunication = new Communication(req.body);
        const communication = await newCommunication.save();
        res.json(communication);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/communications', async (req, res) => {
    try {
        const communications = await Communication.find().populate('project');
        res.json(communications);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
