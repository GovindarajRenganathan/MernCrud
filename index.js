const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRoute = require('./Router/infoRoute');
const morgan = require('morgan');
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

mongoose.connect('mongodb://127.0.0.1:27017/info',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('db connected'))
.catch((err) => console.error(err));
app.use('/info',userRoute)

app.listen(5000, (err) =>
{
    if(!err){
        console.log('server connected')
    }
    else{
        console.error(err)
    }
})