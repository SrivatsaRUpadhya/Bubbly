function Footer() {
    return (
     
       <div className="footer-section">
         <footer class="section-footer bg-primary footer-dark">
            <div class="container">
            <section class="footer-main padding-y">
                <div class="row">
                <aside class="col-12 col-sm-12 col-lg-3">
                    <article class="me-lg-4">
                    <p class="mt-3"> © 2021- 2022 Therichpost. <br /> All rights reserved. </p>
                    </article>
                </aside>
                <aside class="col-6 col-sm-4 col-lg-2">
                    <h6 class="title">Store</h6>
                    <ul class="list-menu mb-4">
                    <li> <a href="#">About us</a></li>
                    <li> <a href="#">Find store</a></li>
                    <li> <a href="#">Categories</a></li>
                    <li> <a href="#">Blogs</a></li>
                    </ul>
                </aside>
                <aside class="col-6 col-sm-4 col-lg-2">
                    <h6 class="title">Information</h6>
                    <ul class="list-menu mb-4">
                    <li> <a href="#">Help center</a></li>
                    <li> <a href="#">Money refund</a></li>
                    <li> <a href="#">Shipping info</a></li>
                    <li> <a href="#">Refunds</a></li>
                    </ul>
                </aside>
                <aside class="col-6 col-sm-4  col-lg-2">
                    <h6 class="title">Support</h6>
                    <ul class="list-menu mb-4">
                    <li> <a href="#"> Help center </a></li>
                    <li> <a href="#"> Documents </a></li>
                    <li> <a href="#"> Account restore </a></li>
                    <li> <a href="#"> My Orders </a></li>
                    </ul>
                </aside>
                <aside class="col-12 col-sm-12 col-lg-3">
                    <h6 class="title">Newsletter</h6>
                    <p>Stay in touch with latest updates about our products and offers </p>
            
                    <form class="mb-3">
                    <div class="input-group">
                        <input class="form-control" type="text" placeholder="Email" />
                        <button class="btn btn-light" type="submit">
                        Join
                        </button>
                    </div>
                    </form>
                </aside>
                </div> 
            </section>  
            
            <section class="footer-bottom d-flex justify-content-lg-between border-top">
                <div>
                <i class="fab fa-lg fa-cc-visa"></i>
                <i class="fab fa-lg fa-cc-amex"></i>
                <i class="fab fa-lg fa-cc-mastercard"></i>
                <i class="fab fa-lg fa-cc-paypal"></i>
                </div>
                <nav class="dropup">
                    <button class="dropdown-toggle btn d-flex align-items-center py-0" type="button" data-bs-toggle="dropdown">
                    <img src="assets/images/flag-usa.webp" class="me-2" height="20" /> 
                    <span>English</span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="#">Russian</a></li>
                    <li><a class="dropdown-item" href="#">Arabic</a></li>
                    <li><a class="dropdown-item" href="#">Spanish</a></li>
                    </ul>
                </nav>
                
            </section>
            </div>
            </footer>
            
            
            <aside class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas_cart">
                <div class="offcanvas-header">
                <h5 class="offcanvas-title">Your cart (3) </h5>
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                
                <figure class="itemside mb-4">
                    <div class="aside">
                    <img src="assets/images/items/14.webp" class="border img-sm rounded" />
                    </div>
                    <figcaption class="info">
                    <a href="#" class="btn btn-icon btn-light float-end"><i class="fa fa-trash"></i></a>
                    <p> Leather Wallet for Men</p>
                    <span class="text-muted">1 x $200.95 </span> <br />
                    <strong class="price"> $400.90 </strong>
                    </figcaption>
                </figure>
            
                <figure class="itemside  mb-4">
                    <div class="aside">
                    <img src="assets/images/items/2.webp" class="border img-sm rounded" />
                    </div>
                    <figcaption class="info">
                    <a href="#" class="btn btn-icon btn-light float-end"><i class="fa fa-trash"></i></a>
                    <p> Canon EOS 1400 Black </p>
                    <span class="text-muted">2 x $169.95 </span> <br />
                    <strong class="price"> $339.90 </strong>
                    </figcaption>
                </figure>
            
                <figure class="itemside  mb-4">
                    <div class="aside">
                    <img src="assets/images/items/11.webp" class="border img-sm rounded" />
                    </div>
                    <figcaption class="info">
                    <a href="#" class="btn btn-icon btn-light float-end"><i class="fa fa-trash"></i></a>
                    <p> Winter Jacket for men and lady </p>
                    <span class="text-muted">2 x $169.95 </span> <br />
                    <strong class="price"> $339.90 </strong>
                    </figcaption>
                </figure>
                <hr />
                
                <p class="mb-3 text-center"> Subtotal:  <strong class="text-danger">$893.00</strong>  </p>
                <div class="mb-3">
                    <a href="#" class="btn w-100 btn-success"> Checkout </a>
                </div>
                <p class="mb-3 text-center"> <img src="assets/images/payments.webp" height="22" />  </p>
            
                </div> 
            </aside> 
       </div>
      
       
    );
}

export default Footer;