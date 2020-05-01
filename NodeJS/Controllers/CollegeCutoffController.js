const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var transporter = require('../main');
var { College_cutoff } = require('../Models/college_cutoff');

// => localhost:3000/employees/
router.get('/', (req, res) => {

    //res.send('zdvdsfv');
    College_cutoff.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Colleges Cutoff :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    College_cutoff.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Colleges Cutoff :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.get('/code/:code1', (req, res) => {
    console.log('3');
    College_cutoff.find({college_code : req.params.code1}, (err, doc) => {
        console.log('4');
        if (!err) {
            console.log(doc);
            res.send(doc); }
        else { console.log('Error in Retriving Colleges with code:' + JSON.stringify(err, undefined, 2)); }
    });
});
router.post('/', (req, res) => {

       var collegeCutoff = new College_cutoff({
        college_code : req.body.college_code,
        year : req.body.year,
        branch : req.body.branch,
        quota : req.body.quota,
        g_open : req.body.g_open,
        g_close : req.body.g_close,
        obc_open : req.body.obc_open,
        obc_close : req.body.obc_close,
        sc_open : req.body.sc_open,
        sc_close : req.body.sc_close,
        st_open : req.body.st_open,
        st_close : req.body.st_close,
        round : req.body.round,
        college_name : req.body.college_code
        });
        console.log("From Controller");
        console.log(req.body.subscribeuserlist);
 /********************************************************************************************************************************** */
        
          req.body.subscribeuserlist.forEach(element => {
              
            var mailOptions = {
                from : 'dipesh.kohder@gmail.com',
                to : element.user_email,
                subject : 'For notifying cutoff updates!!',
                text : ' Hii '+ element.user_name + ',\n\n      We are glad to infrom you that cut off for "' + req.body.college_name + '" for Branch "'+req.body.branch+'" is updated !\n'+ 
                        'Quick Infromation is given below :  \n' + '*For General Catagory : Opening at '+ req.body.g_open + ' and Closing at ' + req.body.g_close  +  '\n*For OBC Catagory : Opening at '+ req.body.obc_open + ' and Closing at ' + req.body.obc_close + '\n*For SC Catagory : Opening at '+ req.body.sc_open + ' and Closing at ' + req.body.sc_close + '\n*For ST Catagory : Opening at '+ req.body.st_open + ' and Closing at ' + req.body.st_close + '\nBest wishes for your best Future!\nRegards,\nCollegeDekho.com'
                        
            }
        
            console.log('before mailing');
            transporter.sendMail(mailOptions,function(err,info){
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    console.log(info);
                }
        
            });
    
          });
 
        var mailOptions = {
            from : 'dipesh.kohder@gmail.com',
            to : 'harshadchovatiya10@gmail.com',
            subject : 'For notifying cutoff updates!!',
            text : ' Hii Harshad Chovatiya, We are glad to infrom you that cut off for ' + req.body.college_name + ' is updated !'
        }
    
        console.log('before mailing');
        transporter.sendMail(mailOptions,function(err,info){
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log(info);
            }
    
        });
    
        console.log('after mailing');
/********************************************************************************************************************************* */
    collegeCutoff.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in College Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var collegeCutoff = {
        college_code : req.body.college_code,
        year : req.body.year,
        branch : req.body.branch,
        quota : req.body.quota,
        g_open : req.body.g_open,
        g_close : req.body.g_close,
        obc_open : req.body.obc_open,
        obc_close : req.body.obc_close,
        sc_open : req.body.sc_open,
        sc_close : req.body.sc_close,
        st_open : req.body.st_open,
        st_close : req.body.st_close,
        round : req.body.round,
        college_name : req.body.college_name
    };
    College_cutoff.findByIdAndUpdate(req.params.id, { $set:collegeCutoff}, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in College Cutoff Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);


    College_cutoff.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { 
            res.send(doc); }
        else { console.log('Error in College cutoff Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;