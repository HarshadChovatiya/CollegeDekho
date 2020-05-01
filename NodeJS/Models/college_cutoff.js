const mongoose = require('mongoose');


var College_cutoff = mongoose.model('college_cutoff',{
        college_code : { 
            type : String,
            require : true,
            maxlength : 50
        },
        college_name :
        {
            type : String,
            require : true,
            maxlength : 300
        },
        year : {
            type : Number,
            require : true,
        },
        branch : { 
            type : String,
            require : true,
            maxlength : 300
        },
        quota : { 
            type : String,
            require : true,
            maxlength : 20
        },
        g_open : { 
            type : Number,
        },
        g_close : { 
            type : Number,
        },
        obc_open : { 
            type : Number,
        },
        obc_close : { 
            type : Number,
        },
        sc_open : { 
            type : Number,
        },
        sc_close : { 
            type : Number,
        },
        st_open : { 
            type : Number,
        },
        st_close : { 
            type : Number,
        },
        round : { 
            type : Number,
            require : true
        },
      
    });

    module.exports = {College_cutoff};