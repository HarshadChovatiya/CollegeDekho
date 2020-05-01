const mongoose = require('mongoose');


var College_ranking = mongoose.model('college_ranking',{
        college_code : { 
            type : String,
            require : true,
            maxlength : 10
        },
        nat_or_internat : { 
            type : String,
            require : true,
            maxlength : 20
        },
        year : { 
            type : Number,
            require : true,
        },
        ranked_by : { 
            type : String,
            require : true,
            maxlength : 158
        },
        rank : { 
            type : Number,
            require : true,
        },
        

       
    });

    module.exports = {College_ranking};