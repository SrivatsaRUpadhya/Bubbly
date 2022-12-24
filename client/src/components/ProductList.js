import React from 'react'
import { useEffect } from 'react'
import ProductCards from './ProductCards'
import axios from "axios";
// import dotenv from "dotenv"
// dotenv.config()

const products = [];


const ProductList = () => {
    function get_data() {
        const query_string = document.getElementById("search_box").value

        var options = {
            method: 'GET',
            url: `http://localhost:8000/search/${query_string}`,
            withCredentials: false,
            headers: { Accept: '*/*', "Access-Control-Allow-Origin" : "http://localhost:8000/motorola"},
            proxy: {
                host: 'localhost',
                port: 8000
              }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
        console.log("click");
    }

    return (
        <div className='bg-gray-200 pt-10 '>
            <p className="text-xl text-center text-gray-500">
                Search and Choose your Products
            </p>
            <div className='w-fit mx-auto mt-5 ' >
                <input type="text" id='search_box' className="w-fit mx-auto py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search" />
                <button onClick={get_data} id='search' className=" px-6 py-2 mt-2 ml-6 text-white bg-[#172439] rounded-lg focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"> Search </button>
            </div>
            <div className="flex  justify-evenly  sm:flex-col lg:flex-row flex-wrap">

                <div className=' w-full lg:w-5/12  ' >

                    <h1 className="mt-4 text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl ">Amazon products</h1>
                    <div className='h-16 ' />

                    <div className="grid grid-cols-2 gap-7  overflow-y-scroll max-h-screen ">

                    </div>

                </div>

                <div className=' w-full lg:w-5/12 ' >

                    <h1 className="mt-4 text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl ">Flipkart products</h1>
                    <div className='h-16' />

                    <div className="grid grid-cols-2 gap-7 overflow-y-scroll max-h-screen  ">
                        {/* {products.map((product, key) => {
                            return (
                                <div key={key} className='min-w-fit' >
                                    <ProductCards />
                                </div>
                            )
                        })
                        } */}
                    </div>

                </div>

            </div>
            <div className=' h-24' />
        </div>
    )
}

export default ProductList