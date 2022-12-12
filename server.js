const http = require("http");
const fs = require("fs");
const { type } = require("os");
const express = require('express');
const bodyParser = require("body-parser");
const amazonScraper = require("amazon-buddy");
const app = express();
const port = 8000;
const cheerio = require('cheerio');
const axios = require('axios');

const url1 = 'https://flipkart.dvishal485.workers.dev/search/ram';

//This options variable stores the options/config for serving static files
const options = {
    // dotfiles: 'ignore',
    // etag: false,
    // extensions: ['htm', 'html'],
    // index: true,
    // maxAge: '1d',
    // redirect: false,
    // setHeaders (res, path, stat) {
    // res.set('x-timestamp', Date.now())
    // }
}

app.use(bodyParser.urlencoded({extended: false}));
//The code below is executed when there is a request for the home page
app.get('/', (req,res)=>{
    const init_data = {};
    fs.writeFileSync("public/result.json", JSON.stringify(init_data), 'utf8');
    app.use(express.static('public', options))
    fs.readFile('index.html', 'utf-8', (err, data)=>{
        if (err) {
            res.writeHead(404);
            res.write("<h1>Something went wrong!</h1>")
            console.log(err);
        }
        else{
            res.send(data)
        }
    })
})

app.post('/submit', (req, res)=>
{
    let query = req.body.search_box;
    console.log(query);
    (async () => 
    {
        try 
        {
            var request = require('request');
            request('https://flipkart.dvishal485.workers.dev/search/' + query, (error, response, body) =>
            {
                if (!error && response.statusCode == 200) 
                {
                    //var importedJSON = JSON.parse(body);
                    //console.log(importedJSON);
                    //fs.writeFileSync("public/result.json", JSON.stringify(importedJSON));
                    //console.log(response);
                    fs.writeFileSync("public/result.json", body);
                }
                else
                {
                    console.log("Error during Flipkart api request :", error);
                }
            })
            
            app.use(express.static('public', options))
            fs.readFile('index.html', 'utf-8', (err, data)=>
            {
                if (err) {
                    res.writeHead(404);
                    res.write("Something went wrong!");
                    console.log(err);
                }
                else
                {
                    res.send(data)
                }
            })
        }
        catch (error) 
        {
            console.log(error);
        }
    })();
    console.log("Gathering Data");
})


//Set the port to listen to
app.listen(port, err=>{
    if (err) {
        console.log("Something went wrong ", err);
    }
    else{
        console.log("Server listening on the port: ", port);
    }
});

//The code below was a try using a node server but it has to be explictly asked to serve each file so it cannot be used

// const server = http.createServer((req, res)=>{
//     res.writeHead(200, {'Content-Type' : 'text/html'});
//     fs.readFile('Bubbly/index.html', 'utf-8', (err, data)=>{
//         if (err) {
//             res.writeHead(404);
//             res.write("Something went wrong!")
//             console.log(err);
//         }
//         else{
//             res.write(data)
//         }
//         res.end();
//     })


// });