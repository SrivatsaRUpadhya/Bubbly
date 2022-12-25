import React, { useState } from 'react'
import { useEffect } from 'react'
import ProductCardFlipkart from './ProductCardFlipkart'
import ProductCardAmazon from './ProductCardAmazon'


const ProductList = () => {

    const [search, setSearch] = useState("Phone");
    // cosnt [products, setProducts] = useState([])
    const [flipkart, setFlipkart] = useState([])
    const [amazon, setAmazon] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {

        setLoading(true)
        ;
        await fetch(`http://localhost:8000/search/${search}`, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                setFlipkart(data.flipkart)
                setAmazon(data.amazon)
            })
        setLoading(false)
    }

    useEffect(() => {
        console.log(loading);
    }, [loading])

    return (
        <div className='bg-white '>
            <p className="text-xl text-center text-gray-500">
                Search and Choose your Products
            </p>
            <div className='w-fit mx-auto mt-5 ' >
                <input onChange={(e) => { setSearch(e.target.value) }} value={search} type="text" id='search_box' className="w-fit mx-auto py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search" />

                <button onClick={fetchData} id='search' className=" px-6 py-2 mt-2 ml-6 text-white bg-[#172439] rounded-lg focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"> Search </button>
            </div>
            <div className="flex  justify-evenly  sm:flex-col lg:flex-row flex-wrap">

                <div className=' w-full lg:w-5/12  ' >

                    <h1 className="mt-4 text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl ">Amazon products</h1>
                    <div className='h-16 ' />
                    {loading && <div className="flex justify-center items-center h-screen">
                        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
                    </div>}
                    <div className="grid grid-cols-2 gap-7  overflow-y-scroll max-h-screen ">
                        {
                            amazon.map((product, key) => {
                                return (
                                    <div key={key} className='min-w-fit' >
                                        <ProductCardAmazon productsAmazon={product}  />
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

                <div className=' w-full lg:w-5/12 ' >

                    <h1 className="mt-4 text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl ">Flipkart products</h1>
                    <div className='h-16' />
                    {loading && <div className="flex justify-center items-center h-screen">
                        <div className="animate-spin rounded-full h-10 w-10  border-t-2 border-b-2 border-gray-900"></div>
                    </div>}
                    <div id='flipkart_container' className="grid grid-cols-2 gap-7 overflow-y-scroll max-h-screen  ">
                        {
                            flipkart.map((product, key) => {
                                return (
                                    <div key={key} className='min-w-fit' >
                                        <ProductCardFlipkart productsFlipkart={product} />
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

            </div>
            <div className=' h-24' />
        </div>
    )
}

export default ProductList