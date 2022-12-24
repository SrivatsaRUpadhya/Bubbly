const router = require('express').Router();
const request = require('request');
const amazonScraper = require('amazon-buddy');

router.get('/:qs', (req, res) => {

    console.log(req.params.qs);
    query_string = req.params.qs;
    const get_amazon =  new Promise(async (resolve, reject) => {
            try {
                
                const products = await amazonScraper.products({ keyword: query_string, number:15, country:"IN" });
                // resolve(products);
                var amazon_prds_array = [];

                products.result.forEach(element => {
                    amazon_prds_array.push(new Promise(async (resolve) => {
                        try {
                        const detailed_prd = await amazonScraper.asin({"asin":element.asin, "country":"IN"});
                            resolve(detailed_prd.result[0]);
                        } catch (error) {
                            console.log(error);
                        }
                    })
                    )
                });
                
                Promise.all(amazon_prds_array)
                .then((values)=>{
                    resolve(values);
                }).catch((error)=>{
                    console.log(error);
                })
            } catch (err) {
                reject(() => { console.log(err) })
            }
        })

    const get_flipkart =  new Promise((resolve, reject) => 
        {   
            console.time("get_flipkart");
        console.time("get_flipkart_initial"); 
            request(`https://flipkart-scraper-api.flipkartscraper.workers.dev/search/${query_string}`, (error, response, body) => 
            {
                if (!error && response.statusCode == 200) 
                {
                    // resolve(JSON.parse(body));

                    console.timeEnd("get_flipkart_initial"); 
                    console.time("get_flipkart_products"); 

                    const productRequests = [];
                    const flipkartData = JSON.parse(body);

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

    console.time("total -- amazon + flipkart");

    Promise.all([get_flipkart,get_amazon])
        .then(result => {
            const resp_data = {
                flipkart: result[0],
                amazon: result[1]
            }
            // console.log(resp_data);
            res.json(resp_data)
            console.timeEnd("total -- amazon + flipkart"); 
        }).catch(err => {
            console.log(err);
        })
})

module.exports = router