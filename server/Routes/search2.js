const router = require('express').Router();
const axios = require('axios');
const request = require('request');
const amazonScraper = require('amazon-buddy');
const { json } = require('express');

router.get('/:qs', (req, res) => {


    //Search amazon 
    const get_amazon =

        new Promise((resolve, reject) => {
            try {
                const products = amazonScraper.products({ keyword: req.params.qs, number: "20", country: "IN" })
                console.log("get_amazon resolved");
                resolve(products)
            } catch (err) {
                reject(() => { console.log(err); })
            }
        });

    // Search on flipkart
    var prd_urls = [];
    const get_flipkart =

        new Promise(resolve => {
            request(`https://flipkart.dvishal485.workers.dev/search/${req.params.qs}`, (error, response, body) => {

                // Printing the error if occurred
                if (error) {
                    console.log(error);
                }
                else {
                    console.log(response.statusCode);
                    // console.log(JSON.parse(body));
                    const prds_each = JSON.parse(body);
                    // console.log(prds_each);
                    prds_each.result.forEach(element => {
                        prd_urls.push(element.query_url.toString())
                        // console.log(prd_urls);
                    })
                    
                }
                resolve(prd_urls)

            })
        });

        const get_details = new Promise((resolve) => {
            var prds_arr = [];
            prd_urls.forEach(element => {
                request(element, (error, response, body)=>{
                    if (error) {
                        console.log(error);
                    }
                    else{
                        console.log(body);
                        // prds_arr.push(body);
                    }
                    console.log(prds_arr);
                })
            })
            resolve(prds_arr)
        });

    (async function () {

        await Promise.all([get_amazon, get_flipkart, get_details])

            .then((response) => {
                const products = {
                    amazon: response[0],
                    urls : response[1],
                    flipkart: response[2]
                }
                res.json(products)
                console.log(products);
            })
        // var products = {
        //     amazon_prds : a_prds,
        //     flipkart_prds : f_prds
        // }
        // console.log(products);
    })();
});


module.exports = router
