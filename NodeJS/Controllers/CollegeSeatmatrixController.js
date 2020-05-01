const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { College_seatmatrix } = require('../Models/college_seatmatrix');

// => localhost:3000/employees/
router.get('/', (req, res) => {

    //res.send('zdvdsfv');
    College_seatmatrix.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Colleges seat matrix :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    College_seatmatrix.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Colleges seat matrix:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/code/:code1', (req, res) => {
    console.log('3');
    College_seatmatrix.find({college_code : req.params.code1}, (err, doc) => {
        console.log('4');
        if (!err) {
            console.log(doc);
            res.send(doc); }
        else { console.log('Error in Retriving Colleges with code:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var collegeSeatmatrix = new College_seatmatrix({
        college_code : req.body.college_code,
        year : req.body.year,
        no_of_seats : req.body.no_of_seats,
        catagory : req.body.catagory,
        quota : req.body.quota,
        branch : req.body.branch
        });
    collegeSeatmatrix.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in College Seat matrix Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var collegeSeatmatrix = {
        college_code : req.body.college_code,
        year : req.body.year,
        no_of_seats : req.body.no_of_seats,
        catagory : req.body.catagory,
        quota : req.body.quota,
        branch : req.body.branch
    };
    College_seatmatrix.findByIdAndUpdate(req.params.id, { $set:collegeSeatmatrix }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in College seat matrix Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);


    College_seatmatrix.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { 
            console.log('Hey there');
            res.send(doc); }
        else { console.log('Error in College seat matrix Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;