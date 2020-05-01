const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Subscribe_users } = require('../Models/subscribe_users');

// => localhost:3000/employees/
router.get('/', (req, res) => {

    console.log('X1');
    //res.send('zdvdsfv');
    Subscribe_users.find((err, docs) => {

        if (!err) {
            console.log('X3');
            console.log(docs);
            res.send(docs);
            
        }
        else { console.log('Error in Retriving Colleges :' + JSON.stringify(err, undefined, 2)); }
    });
});




router.post('/', (req, res) => {
    var userInfo = new Subscribe_users({
            user_name : req.body.user_name,
            user_email : req.body.user_email
        });
    userInfo.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User infromation Save :' + JSON.stringify(err, undefined, 2)); }
    });
});



module.exports = router;