const config = require('config.json');
const mongoose = require('mongoose');
mongoose.connect(config.connectionString);
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/user.model'),
    Project: require('../projects/projects.model'),
    ProjectDocument: require('../projectdocs/projectdocs.model')
};