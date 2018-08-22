const express = require('express');
const router = express.Router();
const projectsService = require('./projects.service');

// routes
router.post('/create', create);
router.get('/', getAll);
router.get('/ofuser/:username', getAllByUsername);
router.get('/:id', getById);
router.get('/current', getCurrent);
router.put('/:id', update);
router.delete('/:id', _delete);
router.delete('/ofuser/:username', deleteAllOfUsername);

module.exports = router;

function create(req, res, next) {
    projectsService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getById(req, res, next) {
    projectsService.getById(req.params.id)
        .then(project => project ? res.json(project) : res.sendStatus(404))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    projectsService.getAll()
        .then(projects => res.json(projects))
        .catch(err => next(err));
}

function getAllByUsername(req, res, next) {
    projectsService.getAllByUsername(req.params.username)
        .then(projects => res.json(projects))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    projectsService.getById(req.params.sub)
        .then(project => projects ? res.json(project) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    projectsService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    projectsService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function deleteAllOfUsername(req, res, next) {
    projectsService.deleteAllOfUsername(req.params.username)
        .then(() => res.json({}))
        .catch(err => next(err));
}