const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    projectTitle: { type: String, required: true },
    username: { type: String, required: true },
    description: { type: String, required: true },
    numberOfDocs: { type: Number, default: 0 },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Project', schema);