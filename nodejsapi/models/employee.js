//require import for creating DB model & Schema
const mongoose = require('mongoose');

let Employee = mongoose.model('Employee', {
    name: { type: String },
    position: {type: String },
    office: { type: String },
    salary: { type: Number }
});

//export model for use across files
module.exports = {Employee};