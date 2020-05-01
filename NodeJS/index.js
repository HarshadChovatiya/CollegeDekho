const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var CollegeInformationController = require('./Controllers/CollegeInformationController');
var CollegeCutoffController = require('./Controllers/CollegeCutoffController');
var CollegeBranchesController = require('./Controllers/CollegeBranchesController');
var CollegeFeesstructures = require('./Controllers/CollegeFeesstructures');
var CollegePlacementController = require('./Controllers/CollegePlacementController');
var CollegeRankingController = require('./Controllers/CollegeRankingController');
var CollegeSeatmatrixController = require('./Controllers/CollegeSeatmatrixController');
var SubscribeuserController = require('./Controllers/SubscribeuserController');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));


app.use('/collegeInfo', CollegeInformationController);
app.use('/collegeCutoff',CollegeCutoffController);
app.use('/collegeBranches',CollegeBranchesController);
app.use('/collegeFeesstructures',CollegeFeesstructures);
app.use('/collegePlacement',CollegePlacementController);
app.use('/collegeRanking',CollegeRankingController);
app.use('/collegeSeatmatrix', CollegeSeatmatrixController);
app.use('/subscribeUsers',SubscribeuserController);