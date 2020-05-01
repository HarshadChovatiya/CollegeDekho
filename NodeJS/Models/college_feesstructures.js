const mongoose = require('mongoose');


var College_feesstructures = mongoose.model('college_feesstructures',{
        college_code : { 
            type : String,
            require : true,
            maxlength : 10
        },
        caution_fee : {
            type : Number,
            require : true,
            maxlength : 10
        },
        one_time_fee : {
            type : Number,
            require : true,
            maxlength : 10
        },
        tution_fee : {
            type : Number,
            require : true,
            maxlength : 10
        },
        other_fee : {
            type : Number,
            require : true,
            maxlength : 10
        },
        mess_fee : {
            type : Number,
            require : true,
            maxlength : 10
        },
        hostel_fee : {
            type : Number,
            require : true,
            maxlength : 10
        },
        electricity_water_fee : {
            type : Number,
            require : true,
            maxlength : 10
        },
        mess_advance : {
            type : Number,
            require : true,
            maxlength : 10
        }
    });

    module.exports = {College_feesstructures};