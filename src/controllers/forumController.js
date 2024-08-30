    const Forum = require('../models/Forum');

    const createPost = async (req, res) => {
    const { forumId, authorId, content } = req.body;
    const attachments = req.files.map(file => file.path);

    try {
        const forum = await Forum.findById(forumId);
        if (!forum) return res.status(404).json({ message: 'Forum not found' });

        forum.posts.push({ author: authorId, content, attachments });
        await forum.save();

        res.json(forum);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
    };

    module.exports = { createPost };
