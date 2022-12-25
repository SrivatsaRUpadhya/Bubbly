const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');
const port = 8000;

app.use(cors())
const searchRoute = require('./Routes/search4')
const productRoute = require('./Routes/product')
app.get('/', (req,res)=>{
    res.send("Live");
});

app.use('/search', searchRoute);
app.use('/product', productRoute);

app.listen(port, err=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Server running and listning at port: " + port);
    }
});
