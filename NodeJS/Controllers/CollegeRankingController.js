const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { College_ranking } = require('../Models/college_ranking');

// => localhost:3000/employees/
router.get('/', (req, res) => {

    //res.send('zdvdsfv');
    College_ranking.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Colleges ranking :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    College_ranking.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Colleges ranking:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/code/:code1', (req, res) => {
    console.log('3');
    College_ranking.find({college_code : req.params.code1}, (err, doc) => {
        console.log('4');
        if (!err) {
            console.log(doc);
            res.send(doc); }
        else { console.log('Error in Retriving Colleges with code:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var collegeRanking = new College_ranking({
        college_code : req.body.college_code,
        year : req.body.year,
        nat_or_internat : req.body.nat_or_internat,
        rank : req.body.rank,
        ranked_by : req.body.ranked_by
        });
    collegeRanking.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in College Ranking  :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var collegeRanking = {
        college_code : req.body.college_code,
        year : req.body.year,
        nat_or_internat : req.body.nat_or_internat,
        rank : req.body.rank,
        ranked_by : req.body.ranked_by
    };
    College_ranking.findByIdAndUpdate(req.params.id, { $set:collegeRanking }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in College ranking Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);


    College_ranking.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { 
            console.log('Hey there');
            res.send(doc); }
        else { console.log('Error in College placement Ranking :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;