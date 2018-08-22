const db = require('_helpers/db');
const ProjectDocument = db.ProjectDocument;

module.exports = {
    getAll,
    getAllByProjectId,
    getById,
    create,
    update,
    delete: _delete,
    deleteAllOfProjectId
};

async function getAll() {
    return await ProjectDocument.find();
}

async function getAllByProjectId(project_id) {
    return await ProjectDocument.find({ "project_id": project_id });
}

async function getById(id) {
    return await ProjectDocument.findById(id);
}

async function create(projectDocParam) {
    // save new Project-Document
    const newProjectDoc = new ProjectDocument(projectDocParam);
    await newProjectDoc.save();
}

async function update(id, projectDocParam) {
    const projectDoc = await ProjectDocument.findById(id);

    // copy projectParam properties to project
    Object.assign(projectDoc, projectDocParam);
    await projectDoc.save();
}

async function _delete(id) {
    await ProjectDocument.findByIdAndRemove(id);
}

async function deleteAllOfProjectId(project_id) {
    await ProjectDocument.deleteMany({ "project_id": project_id }, function (err) {});
}