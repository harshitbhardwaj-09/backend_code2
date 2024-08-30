const express = require('express');
const multer = require('multer');
const { scheduleSeminar } = require('../controllers/seminarController');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/schedule-seminar', upload.array('documents'), scheduleSeminar);

module.exports = router;
