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
                // Create a new div element
                var prd_div = document.createElement('div');
                // Set the id attribute of the div to "productDiv"
                prd_div.setAttribute('id', 'productDiv');

                // Create a new li element
                var prd_li = prd_div.appendChild(document.createElement('li'));
                
                // Create a new h3 element for the price
                var prd_price = prd_div.appendChild(document.createElement('h4'));
                prd_price.innerText = element['price']['current_price'];
              
                // Create a new div element for the image
                var img_div = prd_div.appendChild(document.createElement('div'));
                img_div.id = "imageFormat";
              
                // Create a new img element for the product image
                var prd_img = img_div.appendChild(document.createElement('img'));
                prd_img.src = element['thumbnail'];
              
                // Create a new a element for the product url
                var prd_url = prd_li.appendChild(document.createElement('a'));
                prd_url.href = element['url'];
                prd_url.textContent = element['title'];
              
                // Append the new div element to the main_list
                main_list.appendChild(prd_div);
            });
              
            return responseData;

        })
        .catch(function(err) {
        console.log(err);
        })
}
add_data();


