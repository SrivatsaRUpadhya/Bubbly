const express = require('express');
const router = express.Router();
const app = express();
const port = 8000;

const searchRoute = require('./Routes/search4')
app.get('/', (req,res)=>{
    res.send("Live");
});

app.use('/search', searchRoute);

app.listen(port, err=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server running and listning at port: " + port);
    }
});
