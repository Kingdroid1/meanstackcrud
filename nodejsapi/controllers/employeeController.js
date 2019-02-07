//require import for Controllers
const express = require('express');
let router = express.Router();
let objectId = require('mongoose').Types.ObjectId;

let {Employee} = require('../models/employee');

//configure routes for http request/response operations
router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if(!err) {res.send(docs);}
        else {
            console.log('Error in retrieving Employees:' + JSON.stringify(err, undefined, 2));
        }
    });
});

router.get('/:id', (req, res) => {
    if(!objectId.isValid(req.params.id))
    return res.status(400).send(`No record with given ID: ${req.params.id}`);

    Employee.findById(req.params.id, (err, doc) => {
        if(!err) {res.send(doc);}
        else{console.log('Error in retrieving employee:' + JSON.stringify(err, undefined, 2));}
    });
});

router.post('/', (req, res) => {
    let emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in saving employee into DB:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if(!objectId.isValid(req.params.id))
    return res.status(400).send(`No record with given ID: ${req.params.id}`);

    let emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    };
    Employee.findByIdAndUpdate(req.params.id, {$set: emp}, {new: true}, (err, doc) => {
        if (!err) {res.send(doc);}
        else {console.log('Error in updating employee record:' + JSON.stringify(err, undefined, 2));}
    });
});

router.delete('/:id', (req, res) => {
    if (!objectId.isValid(req.params.id))
    return res.status(400).send(`No record found with given ID: ${req.params.id}`);

    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err) {res.send(doc);}
        else {console.log('Error in deleting employee record:' + JSON.stringify(err, undefined, 2));}
    });
});

//export router function
module.exports = router;
