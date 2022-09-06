const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/get-jobs-completed', controller.getJobsCompleted);

module.exports = (app) => {
    app.use('/bar', router);
}