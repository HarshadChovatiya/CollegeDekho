const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { College_placement } = require('../Models/college_placement');

// => localhost:3000/employees/
router.get('/', (req, res) => {

    //res.send('zdvdsfv');
    College_placement.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Colleges placement :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    College_placement.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Colleges placement:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/code/:code1', (req, res) => {
    console.log('3');
    College_placement.find({college_code : req.params.code1}, (err, doc) => {
        console.log('4');
        if (!err) {
            console.log(doc);
            res.send(doc); }
        else { console.log('Error in Retriving Colleges with code:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var collegePlacement = new College_placement({
        college_code : req.body.college_code,
        year : req.body.year,
        branch : req.body.branch,
        no_participated_students : req.body.no_participated_students,
        no_placed_students : req.body.no_placed_students,
        placed_percentage : req.body.placed_percentage,
        degree_type : req.body.degree_type
        });
    collegePlacement.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in College Placement Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var collegePlacement = {
        college_code : req.body.college_code,
        year : req.body.year,
        branch : req.body.branch,
        no_participated_students : req.body.no_participated_students,
        no_placed_students : req.body.no_placed_students,
        placed_percentage : req.body.placed_percentage,
        degree_type : req.body.degree_type
    };
    College_placement.findByIdAndUpdate(req.params.id, { $set:collegePlacement }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in College placement Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);


    College_placement.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { 
            console.log('Hey there');
            res.send(doc); }
        else { console.log('Error in College placement Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;