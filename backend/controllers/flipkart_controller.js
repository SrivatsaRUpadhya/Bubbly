const request = require('request');
const fetch = require('node-fetch');
var axios = require("axios").default;

const getFlipkart = async function (req, res, next) {
    const query_string = req.params.qs;
    console.log(query_string);


    var options = {
        method: 'GET',
        url: 'https://flipkart.dvishal485.workers.dev/search/',
        headers: { "Accept-Encoding": "gzip,deflate,compress" }
    };

    await axios.request(options).then(function (response) {
        next();
        res.write(JSON.stringify(response.data))
        // console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}

module.exports = { getFlipkart };