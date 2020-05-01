const mongoose = require('mongoose');


var Subscribe_users = mongoose.model('subscribe_users',{
        user_name :{
            type : String,
            require : true,
            maxlength : 100
        },
        user_email:
        {
            type :String,
            require : true,
            maxlength : 100
        }

    });

    module.exports = {Subscribe_users};