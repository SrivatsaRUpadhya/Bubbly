const express = require('express');
const router = express.Router();
const app = express();
const port = 8000;

const searchRoute = require('./Routes/search')
app.get('/', (req,res)=>{
    res.send("Live");
});

app.use('/search', searchRoute);

app.listen(8000);
