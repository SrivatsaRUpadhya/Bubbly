const router = require('express').Router()
const amazonScraper = require('amazon-buddy');
const axios = require('axios');

router.get('/:qs/:p', (req, res) => {
    const query_string = req.params.qs;
    const page = req.params.p;
    console.log(query_string);
    console.log(page);

    const get_amazon = new Promise(async (resolve, reject) => {
        try {
            const products = await amazonScraper.products({ keyword : req.params.qs, bulk:false, country : "IN", page:page})
            resolve(products)
        } catch (err) {
            reject(console.log(err));
        }
    })

    var options_flipkart = {
        method: 'GET',
        url: `https://flipkart-scraper-api.flipkartscraper.workers.dev/search/${query_string}?page=${page}`,
        headers: { "Accept-Encoding": "gzip,deflate,compress" }
    };

    Promise.all([get_amazon, axios.request(options_flipkart)])
        .then(resp => {
            resp_obj = {
                amazon: resp[0].result,
                flipkart: resp[1].data.result
            }
            res.status(200).json(resp_obj)
            console.log("Data sent to client");
        }).catch(error => {
            console.log(error);
        })
})


module.exports = router;