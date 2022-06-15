const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const testSchema = new Schema ({
    firstAnswer:  { type: String, required: true, },
    secondAnswer: { type: String, required: true, }
});

const test = mongoose.model('test', testSchema);
module.exports = test;