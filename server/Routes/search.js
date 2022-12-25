const router = require('express').Router()
const amazonScraper = require('amazon-buddy');
const axios = require('axios');

router.get('/:qs', (req, res) => {
    const query_string = req.params.qs;
    console.log(query_string);

    const get_amazon = new Promise(async (resolve, reject) => {
        try {
            const products = await amazonScraper.products({ keyword : req.params.qs})
            resolve(products)
        } catch (err) {
            reject(console.log(err));
        }
    })

    var options_flipkart = {
        method: 'GET',
        url: `https://flipkart.dvishal485.workers.dev/search/${query_string}`,
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