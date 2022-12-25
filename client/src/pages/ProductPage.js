import { withRouter } from 'react-router'
import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { useParams } from "react-router-dom";


const ProductPage = () => {
    const [product_details, set_product_details] = useState([]);
    const effectRan = useRef(false)
    // const [data, setData] = useState({data: []});
    // const [err, setErr] = useState('');
    const params = useParams();
    useEffect(() => {
        if (effectRan.current == false) {
            console.log("Running once");
            fetch(`https://bubbly-fnfu.onrender.com/${params.asin}`, {
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }).then(response => response.json())
                .then(data => {
                    console.log(data);
                    set_product_details(data[0])
                })
            effectRan.current = true
        }
    }, [])
    if ((product_details.length) != 0) {

        return (
            <>
                <section className='bg-slate-200 min-h-[75vh]' >
                    <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
                        <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
                            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">

                                <div className="grid grid-cols-2 gap-4 lg:mt-4">
                                    {
                                        product_details.images.map((img, key) => {
                                            return (
                                                <div key={key} className='min-w-fit' >
                                                    <img
                                                        alt={key}
                                                        src={img}
                                                        className="object-cover w-full aspect-square rounded-xl"
                                                    />
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>

                            <div className="sticky top-0">

                                <div className="flex justify-between mt-8">
                                    <div className="max-w-[35ch]">
                                        <h1 className="text-2xl font-bold">
                                            {product_details.title}
                                        </h1>

                                    </div>

                                    <p className="text-lg font-bold">{product_details.price.symbol}{product_details.price.current_price}</p>
                                </div>

                                <details
                                    className="group relative mt-4 [&_summary::-webkit-details-marker]:hidden"
                                >
                                    <summary className="block">
                                        <div>
                                            <div className="prose max-w-none group-open:hidden">
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

                                    <fieldset>
                                        <legend className="mb-1 text-sm font-medium">Color</legend>

                                        <div className="flow-root">
                                            <div className="-m-0.5 flex flex-wrap">
                                                <label for="color_tt" className="cursor-pointer p-0.5">
                                                    <input
                                                        type="radio"
                                                        name="color"
                                                        id="color_tt"
                                                        className="sr-only peer"
                                                    />

                                                    <span
                                                        className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                                                    >
                                                        Texas Tea
                                                    </span>
                                                </label>

                                                <label for="color_fr" className="cursor-pointer p-0.5">
                                                    <input
                                                        type="radio"
                                                        name="color"
                                                        id="color_fr"
                                                        className="sr-only peer"
                                                    />

                                                    <span
                                                        className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                                                    >
                                                        Fiesta Red
                                                    </span>
                                                </label>

                                                <label for="color_cb" className="cursor-pointer p-0.5">
                                                    <input
                                                        type="radio"
                                                        name="color"
                                                        id="color_cb"
                                                        className="sr-only peer"
                                                    />

                                                    <span
                                                        className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                                                    >
                                                        Cobalt Blue
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>

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
}

export default ProductPage
