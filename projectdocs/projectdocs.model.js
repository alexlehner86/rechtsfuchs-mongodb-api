const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    project_id: { type: String, required: true },
    rechtsquelle: { type: String, required: true },
    headline: { type: String, required: true },
    maintext: { type: String, required: true },
    smallprint: { type: String, required: true },
    web_url: { type: String },
    pdf_url: { type: String },
    doc_url: { type: String },
    gesamt_url: { type: String }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('ProjectDocument', schema);