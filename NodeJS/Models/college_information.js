const mongoose = require('mongoose');


var College_information = mongoose.model('college_information',{
        college_code : { 
            type : String,
            require : true,
            maxlength : 10
        },
        college_name : {
            type : String,
            require : true,
            maxlength :150
        },
        college_type : { 
            type : String,
            require : true,
            maxlength : 20
        },
        college_subtype : { 
            type : String,
            require : true,
            maxlength : 20
        },
        city : { 
            type : String,
            require : true,
            maxlength : 20
        },
        state : { 
            type : String,
            require : true,
            maxlength : 15
        },
        address : { 
            type : String,
            require : true,
            maxlength : 500
        },
        established_year : { 
            type : Number,
            require : true,
            maxlength : 10
        },
        pincode : { 
            type : Number,
            require : true,
            maxlength : 7
        },
        other_name : { 
            type : String,
            require : true,
            maxlength : 50
        },
        away_from_railway_station : { 
            type : Number,
            require : true,
            maxlength : 10
        },
        away_from_airport : {
            type : Number,
            require : true,
            maxlength : 10
        },
        image_path :
        {
            type : String,
            require : true,
            maxlength : 100
        },
        logo_path : {
            type : String,
            require : true,
        },
        near_airport : {
            type : String,
            require : true,
            maxlength : 300
        },
        near_station : {
            type : String,
            require : true,
            maxlength : 300
        },
        website : {
            type : String,
            require : true,
            maxlength : 50
        }
    });

    module.exports = {College_information};