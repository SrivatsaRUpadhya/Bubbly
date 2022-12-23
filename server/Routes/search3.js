const router = require('express').Router();
const axios = require('axios');
const request = require('request');
const amazonScraper = require('amazon-buddy');

router.get('/:qs', (req, res) => {

    console.log(req.params.qs);
    const get_amazon = () => {

        console.time("get_amazon");  // Start the timer

        return new Promise(async (resolve, reject) => {
            try {
                const products = await amazonScraper.products({ keyword: req.params.qs, number: "20", country: "IN" })
                resolve(products)
                // console.log("get_amazon resolved");
                // var a_query_arr = products.result
                // var a_prds_arr = []
                // var a_prd_details_promise = a_query_arr.map(prd => {
                //     return new Promise(async (resolve) => {
                //         try{
                //             const det_prd = await amazonScraper.asin({ asin : prd.asin }); 
                //             resolve(det_prd)
                //         }
                //         catch(err){
                //             console.log(err);
                //         }
                //     })

                console.timeEnd("get_amazon");  // End the timer

            } catch (err) {
                reject(() => { console.log(err) })
            }
        })
    };

    const get_flipkart = () => {
        console.time("get_flipkart");  // Start the timer
        return new Promise((resolve, reject) => {
            var f_prds_arr = [];
            var axios = require("axios").default;

            var options = {
                method: 'GET',
                url: `https://flipkart.dvishal485.workers.dev/search/${req.params.qs}`,
                headers: { "Accept-Encoding": "gzip,deflate,compress" }
            };

            axios.request(options).then(function (response) {
                var f_query_arr = response.data.result
                // console.log(query_arr);
                const f_prd_details_promise = f_query_arr.map(element => {
                    return new Promise((resolve) => {
                        request(element.query_url, (error, response, body) => {
                            if (error) {
                                console.log(error);
                            }
                            else {
                                // console.log(body);
                                f_prds_arr.push(JSON.parse(body))
                                resolve(f_prds_arr)
                            }
                        })
                    })
                })

                Promise.all(f_prd_details_promise)
                    .then((values) => {
                        values.forEach(prd => {
                            // console.log(prd);
                            // prds_arr.push(prd)
                        })
                        resolve(f_prds_arr);
                        console.timeEnd("get_flipkart");  // End the timer
                    }).catch((err) => {
                        console.log(err);
                    })
            }).catch(function (error) {
                console.error(error);
            });

            

        })
    }

    console.time("total -- amazon + flipkart");

    Promise.all([get_amazon(), get_flipkart()])
        .then(result => {
            const resp_data = {
                amazon: result[0],
                flipkart: result[1]
            }
            // console.log(resp_data);
            res.json(resp_data)
            console.timeEnd("total -- amazon + flipkart"); 
        }).catch(err => {
            console.log(err);
        })
})

module.exports = router