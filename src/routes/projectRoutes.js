const express = require('express');
const router = express.Router();
const Project = require('../models/Project');


router.post('/create', async (req, res) => {
const { name, description, status, conflicts, location, notifications } = req.body;

try {
    const newProject = new Project({
    name,
    description,
    status,
    conflicts,
    location,
    notifications,
    });

    await newProject.save();
    res.status(201).json(newProject);
} catch (error) {
    res.status(500).json({ message: 'Error creating project', error });
}
});


router.get('/', async (req, res) => {
try {
    const projects = await Project.find();
    res.status(200).json(projects);
} catch (error) {
    res.status(500).json({ message: 'Error fetching projects', error });
}
});

router.get('/:id', async (req, res) => {
try {
    const project = await Project.findById(req.params.id);
    if (!project) {
    return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(project);
} catch (error) {
    res.status(500).json({ message: 'Error fetching project', error });
}
});


router.put('/:id/status', async (req, res) => {
const { status } = req.body;

try {
    const project = await Project.findById(req.params.id);
    if (!project) {
    return res.status(404).json({ message: 'Project not found' });
    }

    project.status.status = status;
    project.status.updatedAt = Date.now();

    await project.save();
    res.status(200).json(project);
} catch (error) {
    res.status(500).json({ message: 'Error updating project status', error });
}
});


router.put('/:id/conflict', async (req, res) => {
const { description } = req.body;

try {
    const project = await Project.findById(req.params.id);
    if (!project) {
    return res.status(404).json({ message: 'Project not found' });
    }

    project.conflicts.push({ description });
    await project.save();

    res.status(200).json(project);
} catch (error) {
    res.status(500).json({ message: 'Error adding conflict', error });
}
});


router.put('/:id/location', async (req, res) => {
const { area, district, state } = req.body;

try {
    const project = await Project.findById(req.params.id);
    if (!project) {
    return res.status(404).json({ message: 'Project not found' });
    }

    project.location = { area, district, state };
    await project.save();

    res.status(200).json(project);
} catch (error) {
    res.status(500).json({ message: 'Error updating location', error });
}
});

router.put('/:id/notify', async (req, res) => {
const { message } = req.body;

try {
    const project = await Project.findById(req.params.id);
    if (!project) {
    return res.status(404).json({ message: 'Project not found' });
    }

    project.notifications.push({ message });
    await project.save();

    res.status(200).json(project);
} catch (error) {
    res.status(500).json({ message: 'Error sending notification', error });
}
});

module.exports = router;
