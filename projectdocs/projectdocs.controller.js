const express = require('express');
const router = express.Router();
const projectDocsService = require('./projectdocs.service');

// routes
router.post('/create', create);
router.get('/', getAll);
router.get('/ofproject/:id', getAllByProjectId);
router.get('/:id', getById);
router.get('/current', getCurrent);
router.put('/:id', update);
router.delete('/:id', _delete);
router.delete('/ofproject/:id', deleteAllOfProjectId);

module.exports = router;

function create(req, res, next) {
    projectDocsService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getById(req, res, next) {
    projectDocsService.getById(req.params.id)
        .then(project => project ? res.json(project) : res.sendStatus(404))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    projectDocsService.getAll()
        .then(projects => res.json(projects))
        .catch(err => next(err));
}

function getAllByProjectId(req, res, next) {
    projectDocsService.getAllByProjectId(req.params.id)
        .then(projects => res.json(projects))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    projectDocsService.getById(req.params.sub)
        .then(project => projects ? res.json(project) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    projectDocsService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    projectDocsService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function deleteAllOfProjectId(req, res, next) {
    projectDocsService.deleteAllOfProjectId(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}