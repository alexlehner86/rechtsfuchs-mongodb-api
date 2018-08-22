const db = require('_helpers/db');
const Project = db.Project;

module.exports = {
    getAll,
    getAllByUsername,
    getById,
    create,
    update,
    delete: _delete,
    deleteAllOfUsername
};

async function getAll() {
    return await Project.find();
}

async function getAllByUsername(username) {
    return await Project.find({ "username": username });
}

async function getById(id) {
    return await Project.findById(id);
}

async function create(projectParam) {
    // check if username+projectTitle-combination is already in use
    if (await Project.findOne({ projectTitle: projectParam.projectTitle,
                                username: projectParam.username })) {
        throw 'Der Projekttitel "' + projectParam.projectTitle + '" wird bereits verwendet';
    }

    const project = new Project(projectParam);

    // save project
    await project.save();
}

async function update(id, projectParam) {
    const project = await Project.findById(id);

    // check if username+(new)projectTitle-combination is already in use
    if (!project) throw 'Projekt nicht gefunden';
    if (project.projectTitle !== projectParam.projectTitle && 
        await Project.findOne({ projectTitle: projectParam.projectTitle,
                                username: projectParam.username })) {
        throw 'Der Projekttitel "' + projectParam.projectTitle + '" wird bereits verwendet';
    }

    // copy projectParam properties to project
    Object.assign(project, projectParam);

    await project.save();
}

async function _delete(id) {
    await Project.findByIdAndRemove(id);
}

async function deleteAllOfUsername(username) {
    await Project.deleteMany({ "username": username }, function (err) {});
}