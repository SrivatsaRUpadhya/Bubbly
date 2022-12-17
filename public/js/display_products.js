const my_button = document.getElementById("submit");
function log_click(){
    console.log('click');
    const q = document.getElementById("query_string").value;      //This is the query string
    console.log(q);     //print out the query string fror testing

    //Send a get request to query the data
    axios.request({
        url: `/search/${q}`,
        method: "GET",
        headers: {
          "Accept": "*/*",
          "Content-Type": "application/json",
        },
      })
  .then((products)=>{       
        //If there are no errors display the data

        console.log(products);      //Log the received data for testing

        //Display the data on the page
        const main_list = document.getElementById("search-results");
        (products.data.result).forEach(element => {
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
        })
    })
    .catch((err)=>{
        //Log the error if any
        console.log(err);
    })
}
my_button.addEventListener("click", log_click);     //Event listener to initiate the search
