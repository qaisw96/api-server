'use strict';

module.exports = (err, req, res) => {
    res.status(500).send({
        error: err.message,
        path: req.path
    })
}