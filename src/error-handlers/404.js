'use strict';

module.exports = (req, res) => {
    res.status(404).send({
        error: 404,
        path: req.baseUrl
    })
}


