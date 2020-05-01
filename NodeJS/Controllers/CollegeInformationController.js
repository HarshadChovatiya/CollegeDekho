const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { College_information } = require('../Models/college_information');

// => localhost:3000/employees/
router.get('/', (req, res) => {

    //res.send('zdvdsfv');
    College_information.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Colleges :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    College_information.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Colleges :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/code/:code1', (req, res) => {
    console.log('3');
    College_information.find({college_code : req.params.code1}, (err, doc) => {
        console.log('4');
        if (!err) {
            console.log(doc);
            res.send(doc); }
        else { console.log('Error in Retriving Colleges with code:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var collegeInfo = new College_information({
        college_name: req.body.college_name,
        college_code: req.body.college_code,
        college_subtype: req.body.college_subtype,
        college_type: req.body.college_type,
        city : req.body.city,
        state : req.body.state,
        other_name : req.body.other_name,
        established_year : req.body.established_year,
        address : req.body.address,
        pincode : req.body.pincode,
        away_from_railway_station : req.body.away_from_railway_station,
        away_from_airport : req.body.away_from_airport,
        image_path : req.body.image_path,
        logo_path : req.body.logo_path,
        near_airport : req.body.near_airport,
        near_station : req.body.near_station,
        website : req.body.website,
        });
    collegeInfo.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in College Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var collegeInfo = {
        college_name: req.body.college_name,
        college_code: req.body.college_code,
        college_subtype: req.body.college_subtype,
        college_type: req.body.college_type,
        city : req.body.city,
        state : req.body.state,
        established_year : req.body.established_year,
        other_name : req.body.other_name,
        address : req.body.address,
        pincode : req.body.pincode,
        away_from_railway_station : req.body.away_from_railway_station,
        away_from_airport : req.body.away_from_airport,
        image_path : req.body.image_path,
        logo_path : req.body.logo_path,
        near_airport : req.body.near_airport,
        near_station : req.body.near_station,
        website : req.body.website,
    };
    College_information.findByIdAndUpdate(req.params.id, { $set:collegeInfo }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in College Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);


    College_information.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { 
            console.log('Hey there');
            res.send(doc); }
        else { console.log('Error in College Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;