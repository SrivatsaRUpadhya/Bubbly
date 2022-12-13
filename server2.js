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
const request = require('request');

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
};

app.use(bodyParser.urlencoded({extended: false}));
//The code below is executed when there is a request for the home page
app.get('/', (req,res)=>{
    const init_data = {};
    fs.writeFileSync("public/result.json", JSON.stringify(init_data), 'utf8');
    app.use(express.static('public', options));
    fs.readFile('index.html', 'utf-8', (err, data)=>{
        if (err) {
            res.writeHead(404);
            res.write("<h1>Something went wrong!</h1>");
            console.log(err);
        }
        else{
            res.send(data);
        }
    });
});

app.post('/submit', (req, res)=>
{
    let query = req.body.search_box;
    console.log(query);
    (async () => {
        try {
            // Wrap the code that needs to be executed before res.send(data) in a Promise
            const promise = new Promise((resolve, reject) => {
                request('https://flipkart.dvishal485.workers.dev/search/' + query, (error, response, body) => {
                    if (!error && response.statusCode == 200) {
                        fs.writeFile("public/flipkartResult.json", body, (err) => {
                            if (err) {
                                reject(err);
                            } else {
                                console.log("Flipkart file written successfully");
                                resolve();
                            }
                        });
                    } else {
                        console.log("Error during Flipkart api request :", error);
                        reject(error);
                    }
                });
            });

            const products = await amazonScraper.products({ keyword: query, number: 15, country: "IN" });
            fs.writeFile("public/amazonResult.json", JSON.stringify(products), (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Amazon file written successfully");
                }
            });

            // Wait for the promise to be resolved before calling res.send(data)
            await promise;
    
            app.use(express.static('public', options));
            fs.readFile('index.html', 'utf-8', (err, data)=>
            {
                if (err) {
                    res.writeHead(404);
                    res.write("Something went wrong!");
                    console.log(err);
                }
                else
                {
                    res.send(data);
                    console.log("Data sent to the website");
                }
            });

        }
        catch (error) 
        {
            console.log(error);
        }
    })();
    console.log("Gathering Data");
});


//Set the port to listen to
app.listen(port, err=>{
    if (err) {
        console.log("Something went wrong ", err);
    }
    else{
        console.log("Server listening on the port: ", port);
    }
});