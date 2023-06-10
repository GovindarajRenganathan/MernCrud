const mongoose = require('mongoose');

const infoSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        lowercase:true,
        required:true
    },
    createdat:{
        type:Date,
        default:Date.now
    }
})
module.exports = mongoose.model('user', infoSchema);
