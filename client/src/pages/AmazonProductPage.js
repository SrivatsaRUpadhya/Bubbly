import { withRouter } from 'react-router'
import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { useParams } from "react-router-dom";


const AmazonProductPage = () => {
    const [product_details, set_product_details] = useState([]);
    const [loading, setLoading] = useState(true);
    const effectRan = useRef(false)
    // const [data, setData] = useState({data: []});
    // const [err, setErr] = useState('');
    const params = useParams();
    useEffect(() => {
        if (effectRan.current == false) {
            console.log("Running once");
            fetch(`http://localhost:8000/product/${params.asin}`, {
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }).then(response => response.json())
                .then(data => {
                    console.log(data);
                    set_product_details(data[0])
                    setLoading(false);
                })
            effectRan.current = true
        }
    }, [])

    useEffect(() => {
        console.log(loading);
    }, [loading])


    if ((product_details.length) != 0) {

        return (
            <>
                <section className='min-h-[75vh] z-0' data-theme = "dracula">
                    <div className="relative max-w-screen-xl px-4 py-8 mx-auto z-0">
                        <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
                            <div className="">

                                <div className="grid grid-cols-2 gap-4 lg:mt-4">
                                    {
                                        product_details.images.map((img, key) => {
                                            return (
                                                <div className='max-w-full flex'>
                                                <div key={key} className='' >
                                                    <img
                                                        alt={key}
                                                        src={img}
                                                        className="object-scale-down w-auto m-auto"
                                                    />
                                                </div>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>

                            <div className="sticky top-0">

                                <div className="flex justify-between mt-8">
                                    <div className="">
                                        <h1 className="text-2xl font-bold w-full">
                                            {product_details.title}
                                        </h1>

                                    </div>
                                </div>
                                <p className="text-3xl font-bold mt-6">{product_details.price.symbol}{product_details.price.current_price}</p>

                                <details
                                    className="group relative mt-4 [&_summary::-webkit-details-marker]:hidden"
                                >
                                    <summary className="block">
                                        <div>
                                            <div className="prose max-w-none">
                                                <p>
                                                    <ul>
                                                        {product_details.feature_bullets.map((feature, key) => {
                                                            return (<li>{feature}</li>)
                                                        })}
                                                    </ul>

                                                </p>
                                            </div>


                                        </div>
                                    </summary>

                                </details>

                                    <div className="flex mt-8">
                                        <a target = "_blank" href={product_details.url}><button
                                            className="block px-5 py-3 ml-3 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-500"
                                        >
                                            View on Amazon
                                        </button>
                                        </a>
                                    </div>

                            </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }
    else {
        return (
            <>
                <section className='bg-slate-200 min-h-[75vh]' >
                    {loading && <div className="flex justify-center items-center h-screen">
                        <div className="animate-spin bg-r rounded-full h-10 w-10 border-t-2 border-b-2 border-gray-900"></div>
                    </div>}
                </section>
            </>

        )

    }
}

export default AmazonProductPage
