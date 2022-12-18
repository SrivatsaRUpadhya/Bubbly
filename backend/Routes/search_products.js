const router = require('express').Router();
const axios = require('axios');
const request = require('request');
const amazonScraper = require('../../node_modules/amazon-buddy');

router.get('/:qs', (req, res) => {


    //Search amazon 
    const get_amazon = new Promise((resolve, reject) => {
        try {
            const products = amazonScraper.products({ keyword: req.params.qs, number: "20", country: "IN" })
            resolve(products)
        } catch (err) {
            reject(() => { console.log(err); })
        }
    });

    // Search on flipkart
    const get_flipkart = new Promise(resolve => {
        request(`https://flipkart.dvishal485.workers.dev/search/${req.params.qs}`, (error, response, body) => {

            // Printing the error if occurred
            if (error) {
                console.log(error);
            }
            else {
                console.log(response.statusCode);
                resolve(body)
            }

        })
    });


    (async function () {
        await Promise.all([get_amazon, get_flipkart])
            .then((response) => {
                const products = {
                    amazon: response[0],
                    flipkart: JSON.parse(response[1])
                }
                res.json(products)
                // console.log(products); 
            })
        // var products = {
        //     amazon_prds : a_prds,
        //     flipkart_prds : f_prds
        // }
        // console.log(products);
    })();
});


module.exports = router
