function add_data(){

    fetch('../amazonResult.json', {
        method: 'get',
        dataType: 'jsonp',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        }
        })
        .then((response) => {
        return response.json() // << This is the problem
        })
        .then((responseData) => { // responseData = undefined
            console.log(responseData);
            const main_list = document.getElementById("search-results");
            responseData['result'].forEach(element => {

            var prd_li = main_list.appendChild(document.createElement('li'));
            console.log(prd_li);

            var prd_price = main_list.appendChild(document.createElement('h3'));
            prd_price.innerText = element['price']['current_price'];
            console.log(prd_price);

            var prd_img = main_list.appendChild(document.createElement('img'));
            prd_img.src = element['thumbnail'];

            var prd_url = prd_li.appendChild(document.createElement('a'));
            prd_url.href = element['query_url'];
            prd_url.textContent = element['title'];
            });
            return responseData;

        })
        .catch(function(err) {
        console.log(err);
        })

    
}
add_data();


