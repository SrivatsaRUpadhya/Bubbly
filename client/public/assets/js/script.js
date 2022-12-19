
/////// execute code when page loads
document.addEventListener("DOMContentLoaded", function(){
    // ... then some code



    /// for demo purpose download link
    var body_el = document.querySelector("body");
    var get_link = document.createElement("div");
    get_link.innerHTML = '<a href="https://therichpost.com/" class="btn btn-dark rounded-pill" style="font-size:13px; z-index:100; position: fixed; bottom:10px; right:10px;">Download</a>'
    body_el.appendChild(get_link);
    // end for demo 

}); 
// end DOMContentLoaded 

  
/////// Enable tooltip of Bootstrap5
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

/////// Prevent closing from click inside dropdown
document.querySelectorAll('.dropdown-menu').forEach(function(element){
    element.addEventListener('click', function (e) {
      e.stopPropagation();
    });
});
// end querySelectorAll


