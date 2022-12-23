const router = require('express').Router();
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

        console.time("get_flipkart");
        console.time("get_flipkart_initial");  // Start the timer
        
        return new Promise((resolve, reject) => 
        {
            request('https://flipkart.dvishal485.workers.dev/search/' + req.params.qs, (error, response, body) => 
            {
                if (!error && response.statusCode == 200) 
                {
                    const productRequests = [];

                    const flipkartData = JSON.parse(body);

                    console.timeEnd("get_flipkart_initial"); 
                    console.time("get_flipkart_products"); 

                    // for (i in flipkartData.result) 
                    for (var i = 0; i < flipkartData.result.length; i++)
                    {
                        productRequests.push(new Promise((resolve, reject) => 
                        {
                            request(flipkartData.result[i].query_url, (error1, response1, body1) => 
                            {
                                if (!error1 && response1.statusCode == 200) {
                                    // console.log(JSON.parse(body1));
                                    resolve(JSON.parse(body1));
                                } 
                                else 
                                {
                                    reject(error1);
                                }
                            });

                        }));
                    }
                      
                    Promise.all(productRequests)
                    .then(results => 
                    {
                        resolve(results);
                        console.timeEnd("get_flipkart_products"); 
                        console.timeEnd("get_flipkart");
                    })
                    .catch(error => 
                    {
                        console.error("error while getting flipkart products", error);
                    });

                } 
                else 
                {
                    console.log("Error during Flipkart api request :", error);
                    reject(error);
                }
            })

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