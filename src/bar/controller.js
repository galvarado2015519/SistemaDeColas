const { bar } = require('../../queues');

const getJobsCompleted = async (req, res) => {
    const total = await bar.getCompletedCount();
    res.send({ total });
}

module.exports = {
    getJobsCompleted
}