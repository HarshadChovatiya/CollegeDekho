const mongoose = require('mongoose');


var College_seatmatrix = mongoose.model('college_seatmatrix',{
        college_code : { 
            type : String,
            require : true,
            maxlength : 10
        },
        branch : { 
            type : String,
            require : true,
            maxlength : 50
        },
        no_of_seats : { 
            type : Number,
            require : true,
        },
        catagory: { 
            type : String,
            require : true,
        },
        quota : { 
            type : String,
            require : true,
        },
    });

    module.exports = {College_seatmatrix};