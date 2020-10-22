const db = require('../models');
const errorHandler = require('../helpers/errors');

function list(req, res, next) {
    db.Product.findAll({
        include: [
            {model: db.Provider},
            {model: db.Category},
        ]
    })
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(errorHandler(res))
}

function create(req, res, next) {
    db.Product.create(req.body)
        .then((data) => {
            res.status(201).send(data);
        })
        .catch(errorHandler(res))
}

function one(req, res, next) {
    db.Product.findById(req.params.id, {
        include: [
            {model: db.Provider},
            {model: db.Category},
        ]
    })
        .then((data) => {
            res.status(200).send(data);
        })
        .catch(errorHandler(res))
}

function edit(req, res, next) {
    db.Product.update(req.body, {where: {id: req.params.id}})
        .then(() => {
            res.sendStatus(200);
        })
        .catch(errorHandler(res))
}

function remove(req, res, next) {
    db.Product.destroy({where: {id: req.params.id}})
        .then(() => {
            res.sendStatus(200);
        })
        .catch(errorHandler(res))
}

module.exports = {
    list: list,
    create: create,
    one: one,
    edit: edit,
    remove: remove
};
