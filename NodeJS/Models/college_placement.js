const mongoose = require('mongoose');


var College_placement = mongoose.model('college_placement',{
        college_code : { 
            type : String,
            require : true,
            maxlength : 10
        },
        year : {
            type : Number,
            require : true,
        },
        branch : { 
            type : String,
            require : true,
            maxlength : 50
        },
        no_participated_students : { 
            type : Number,
            require : true,
        },
        no_placed_students: { 
            type : Number,
            require : true,
        },
        placed_percentage : { 
            type : Number,
            require : true,
        },
        degree_type : { 
            type : String,
            require : true,
            maxlength : 50
        },
       
    });

    module.exports = {College_placement};