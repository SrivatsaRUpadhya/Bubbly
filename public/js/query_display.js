function add_data(){

    fetch('./result.json', {
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
            var prd_url = prd_li.appendChild(document.createElement('a'));
            prd_url.href = element['url'];
            prd_url.textContent = element['url'];
            });
            return responseData;
        })
        .catch(function(err) {
        console.log(err);
        })

    
}
add_data();


