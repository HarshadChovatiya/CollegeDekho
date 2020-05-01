const mongoose = require('mongoose');


var College_branches = mongoose.model('college_branches',{
        college_code : { 
            type : String,
            require : true,
            maxlength : 10
        },
        branch_code : {
            type : String,
            require : true,
            maxlength : 15,
        },
        branch_name : { 
            type : String,
            require : true,
            maxlength : 50
        },
      
    });

    module.exports = {College_branches};