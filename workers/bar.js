module.exports = (job, done) => {
    try {
        console.log(job.data);
        console.log('Entra al worker de bar');
        job.progress(100);
        done(null, job.data);
    } catch (error) {
        done(error);
    }
}