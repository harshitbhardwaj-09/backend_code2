const express = require('express');
const multer = require('multer');
const { createPost } = require('../controllers/forumController');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/create-post', upload.array('attachments'), createPost);

module.exports = router;
