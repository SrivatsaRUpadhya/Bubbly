const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

const indexRoute = require('./backend/Routes/index')
const searchRoute = require('./backend/Routes/search_products')

//Make the server listen to the set port
app.listen(port, (err)=>{
    if (err) {
        console.log("Something went wrong! ", err);
    }
    else{
        console.log(`Server is running and listenig at port ${port}` );
    }
})

//Make the static content available
app.use(express.static('public'))
app.use(express.static(path.resolve('./public/js')))

app.use('/', indexRoute)            //Route to display the home page
app.use('/search', searchRoute)     //Route to carry out the query/search