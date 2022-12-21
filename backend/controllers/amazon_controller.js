const amazonScrapper = require('amazon-buddy');

const getAmazon = async function(req,res){
    const query_string = req.params.qs;

    try {
        const amazon_prds = await amazonScrapper.products(
            {
            "keyword" : query_string, 
            "number" : 50,
            "country" : "IN"
        });
        res.end(JSON.stringify(amazon_prds.result));
        // console.log(amazon_prds.result);

    } catch (error) {
        console.log(error);
    }
}

module.exports = {getAmazon};