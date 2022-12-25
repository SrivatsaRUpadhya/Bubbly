const router = require('express').Router()
const amazonScraper = require('amazon-buddy');

router.get('/:qs', (req, res) => {
    const query_string = req.params.qs;
    console.log(query_string);
    (async () => {
        try {
            const prd_details = await amazonScraper.asin({ asin : req.params.qs})
            res.json(prd_details.result);
            console.log(prd_details.result);
        } catch (err) {
            console.log(err);
        }
    })()
})

module.exports = router
