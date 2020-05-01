const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { College_branches } = require('../Models/college_branches');

// => localhost:3000/employees/
router.get('/', (req, res) => {

    //res.send('zdvdsfv');
    College_branches.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Colleges Branches :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    College_branches.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Colleges Branches :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/code/:code1', (req, res) => {
    console.log('3');
    College_branches.find({college_code : req.params.code1}, (err, doc) => {
        console.log('4');
        if (!err) {
            console.log(doc);
            res.send(doc); }
        else { console.log('Error in Retriving Colleges with code:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var collegeBranches = new College_branches({
        college_code : req.body.college_code,
        branch_code : req.body.branch_code,
        branch_name : req.body.branch_name
    });
    collegeBranches.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in College Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var collegeBranches = {
        college_code : req.body.college_code,
        branch_code : req.body.branch_code,
        branch_name : req.body.branch_name
    };
    College_branches.findByIdAndUpdate(req.params.id, { $set:collegeBranches}, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in College Branches Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);


    College_branches.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { 
            res.send(doc); }
        else { console.log('Error in College Branches Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;