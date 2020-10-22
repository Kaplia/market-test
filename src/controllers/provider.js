const db = require('../models');

function list(req, res, next) {
    db.Provider.findAll()
        .then((data) => {
            res.status(200).send(data);
        })
}

function create(req, res, next) {
    db.Provider.create(req.body)
        .then((data) => {
            res.status(201).send(data);
        })
}

function one(req, res, next) {
    db.Provider.findById(req.params.id)
        .then((data) => {
            res.status(200).send(data);
        })
}

function edit(req, res, next) {
    db.Provider.update(req.body, {where: {id: req.params.id}})
        .then(() => {
            res.sendStatus(200);
        })
}

function remove(req, res, next) {
    db.Provider.destroy({where: {id: req.params.id}})
        .then(() => {
            res.sendStatus(200);
        })
}

module.exports = {
    list: list,
    create: create,
    one: one,
    edit: edit,
    remove: remove
};
