const router = require('express').Router()
const amazonScraper = require('amazon-buddy');
const { log } = require('console');
const fetch = require('node-fetch')
var url = require('url');
router.get('/:qs', (req, res) => {
    const query_string = req.params.qs;
    console.log(query_string);
    (async () => {
        try {
            const prd_details = await amazonScraper.asin({ asin : req.params.qs, country:"IN"})
            res.json(prd_details.result);
            console.log(prd_details.result);
        } catch (err) {
            console.log(err);
        }
    })()
})

router.get('/', (req, res) => {
    const qs = url.parse(req.url, true).query.url
    console.log(qs);
    fetch(qs)
  .then(res => res.json())
  .then((json) => {
    console.log(json)
    res.json(json)
  }
    
    )
  .catch(err => console.error('error:' + err));
})

module.exports = router
