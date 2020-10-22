const db = require('../models');

function list(req, res, next) {
    db.Category.findAll()
        .then((data) => {
            res.status(200).send(data);
        })
}

function create(req, res, next) {
    db.Category.create(req.body)
        .then((data) => {
            res.status(201).send(data);
        })
}

function one(req, res, next) {
    db.Category.findById(req.params.id)
        .then((data) => {
            res.status(200).send(data);
        })
}

function edit(req, res, next) {
    db.Category.update(req.body, {where: {id: req.params.id}})
        .then(() => {
            res.sendStatus(200);
        })
}

function remove(req, res, next) {
    db.Category.destroy({where: {id: req.params.id}})
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
