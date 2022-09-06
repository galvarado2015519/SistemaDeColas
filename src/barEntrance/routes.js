const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/get-entrance', controller.getBarEntrance);

module.exports = (app) => {
    app.use('/bar-entrance', router);
}