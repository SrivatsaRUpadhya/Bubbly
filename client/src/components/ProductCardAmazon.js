import React from 'react'
import { Link } from 'react-router-dom'

const ProductCardAmazon = ({ productsAmazon }) => {


    const { title: name, thumbnail: thumbnails, url: share_url, price, asin } = productsAmazon;

    return (
        <>
            <div class="flex">
                <div class="shadow-md rounded-lg max-w-sm dark:bg-gray-900 dark:border-gray-700">
                    <a href="#">
                        <div>
                            <img class="rounded-t-lg p-8 object-scale-down h-60 w-auto m-auto" src={thumbnails} alt="product image"></img>
                        </div>
                    </a>
                    <div class="px-5 pb-5 bot">
                        <a href="#">
                            <h2 class="text-gray-900 font-semibold text-l tracking-tight dark:text-white">{name}</h2>
                        </a>

                        <div class="flex items-center justify-between pt-4">
                            <span class="text-3xl font-bold text-gray-900 dark:text-white">₹{price.current_price}</span>
                            <Link class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" to={{ pathname: `/product/${asin}` }}>
                                Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductCardAmazon