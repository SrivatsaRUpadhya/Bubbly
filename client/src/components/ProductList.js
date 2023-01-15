import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import ProductCardFlipkart from './ProductCardFlipkart'
import ProductCardAmazon from './ProductCardAmazon'

const ProductList = () => {

    const [search, setSearch] = useState("Phone");
    // cosnt [products, setProducts] = useState([])
    const [flipkart, setFlipkart] = useState([])
    const [amazon, setAmazon] = useState([])
    useEffect(() => {
        if (effectRan.current == false) {
            if (sessionStorage.getItem("amazon") != null) {
                console.log(JSON.parse(sessionStorage.getItem("amazon")));
                setAmazon(JSON.parse(sessionStorage.getItem("amazon")))
                setFlipkart(JSON.parse(sessionStorage.getItem("flipkart")))
                setSearch(sessionStorage.getItem("search_string"))
                setPage(sessionStorage.getItem("page"))
            }
            else {
                fetchData();
            }
            effectRan.current = true
        }
    }, [])

    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1);
    const effectRan = useRef(false);

    const fetchData = async () => {
        setLoading(true);
        await fetch(`https://bubbly-fnfu.onrender.com/search/${search}/${page}`, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                setFlipkart(data.flipkart)
                setAmazon(data.amazon)
                sessionStorage.setItem("flipkart", JSON.stringify(data.flipkart))
                sessionStorage.setItem("amazon", JSON.stringify(data.amazon))
                setSearch(sessionStorage.setItem("search_string", search))
                setSearch(sessionStorage.setItem("page", page))
            })
        setLoading(false)
        // console.log(sessionStorage.getItem("amazon"));
    }

    function handleNext() {
        let new_page = page + 1;
        setPage(new_page);
        console.log(page);
        setFlipkart([]);
        setAmazon([]);
        fetchData();
    }

    function handleSearch() {
        var new_page = 1;
        sessionStorage.setItem("last_search", document.getElementById("search_box").value)
        setAmazon([]);
        setFlipkart([])
        setPage(new_page);
        // console.log(page);
        fetchData();
    }

    useEffect(() => {
        console.log(loading);
    }, [loading])


    return (
        <div className='' data-theme="" >
            <div className='w-full mx-auto mt-5 ' >
                <div className='mx-auto w-fit'>
                    <input onChange={(e) => { setSearch(e.target.value) }} value={search} type="text" id='search_box' className="mx-auto py-2 sm:pl-10 sm:pr-4 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search" />

                    <button onClick={handleSearch} id='search' className=" px-3 sm:px-6 py-2 mt-2 ml-6 text-white bg-[#172439] rounded-lg focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"> Search </button>
                </div>

            </div>

            <div className="flex  justify-evenly  sm:flex-col lg:flex-row flex-wrap">

                <div className=' w-full lg:w-5/12  ' >

                    <h1 className="mt-4 text-3xl font-semibold text-center capitalize lg:text-4xl ">Amazon products</h1>
                    <div className='h-16 ' />
                    {loading && <div className="flex justify-center items-center h-screen">
                        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-200"></div>
                    </div>}
                    <div className="grid grid-cols-2 gap-7  overflow-y-scroll max-h-screen ">
                        {
                            amazon.map((product, key) => {
                                return (
                                    <div key={key} className='min-w-fit flex'>
                                        <ProductCardAmazon productsAmazon={product} />
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

                <div className=' w-full lg:w-5/12 ' >

                    <h1 className="mt-4 text-3xl font-semibold text-center capitalize lg:text-4xl ">Flipkart products</h1>
                    <div className='h-16' />
                    {loading && <div className="flex justify-center items-center h-screen">
                        <div className="animate-spin rounded-full h-10 w-10  border-t-2 border-b-2 border-gray-200"></div>
                    </div>}
                    <div id='flipkart_container' className="grid grid-cols-2 gap-7 overflow-y-scroll max-h-screen  ">
                        {
                            flipkart.map((product, key) => {
                                return (
                                    <div key={key} className='min-w-fit flex' >
                                        <ProductCardFlipkart productsFlipkart={product} />
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

            </div>
            <div className='text-center mt-16'>
                <h3 className=''>{page}</h3>
                <button onClick={handleNext} id='search' className="rounded-lg focus:outline-none focus:ring focus:ring-opacity-40 underline focus:ring-blue-300">Next page</button>
            </div>
            <div className=' h-24' />

        </div>
    )
}

export default ProductList
