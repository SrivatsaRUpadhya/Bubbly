const router = require('express').Router();
const { request } = require('express');
const amazonScraper = require('../../node_modules/amazon-buddy');

router.get('/:qs', (req,res)=>{

    //Search on amazon
    (async function(){
        try{
            console.log(req.params.qs);
            const amazon_prds = await amazonScraper.products({keyword : req.params.qs, number : "10", country : "IN"})
            res.json(amazon_prds)
            console.log(amazon_prds);
        }catch(err){
            console.log(err);
        }
    })();

    //Search on flipkart
});


module.exports = router