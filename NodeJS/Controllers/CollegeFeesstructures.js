const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { College_feesstructures} = require('../Models/college_feesstructures');

// => localhost:3000/employees/
router.get('/', (req, res) => {

    //res.send('zdvdsfv');
    College_feesstructures.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Colleges fees :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    College_feesstructures.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Colleges fees :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/code/:code1', (req, res) => {
    console.log('3');
    College_feesstructures.find({college_code : req.params.code1}, (err, doc) => {
        console.log('4');
        if (!err) {
            console.log(doc);
            res.send(doc); }
        else { console.log('Error in Retriving Colleges with code:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var collegeFS = new College_feesstructures({
            college_code : req.body.college_code,
            caution_fee : req.body.caution_fee,
            one_time_fee : req.body.one_time_fee,
            tution_fee : req.body.tution_fee,
            other_fee : req.body.other_fee,
            mess_fee : req.body.mess_fee,
            hostel_fee : req.body.hostel_fee,
            electricity_water_fee : req.body.electricity_water_fee,
            mess_advance : req.body.mess_advance
        });
    collegeFS.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in College fees Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var collegeFS= {
        college_code : req.body.college_code,
        caution_fee : req.body.caution_fee,
        one_time_fee : req.body.one_time_fee,
        tution_fee : req.body.tution_fee,
        other_fee : req.body.other_fee,
        mess_fee : req.body.mess_fee,
        hostel_fee : req.body.hostel_fee,
        electricity_water_fee : req.body.electricity_water_fee,
        mess_advance : req.body.mess_advance
    };
    College_feesstructures.findByIdAndUpdate(req.params.id, { $set:collegeFS }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in College fees Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);


    College_feesstructures.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { 
            console.log('Hey there');
            res.send(doc); }
        else { console.log('Error in College fees Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;