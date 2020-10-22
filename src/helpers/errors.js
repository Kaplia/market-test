function errorHandler(res) {
    return (err) => {
        res.status(400).send({err});
    }
}

module.exports = errorHandler;
