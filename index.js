require('dotenv').config();

const express = require('express');
const app = express();

const { config: {port} } = require('./config');
const { queues } = require('./queues');


require('./server')(app, port, queues);