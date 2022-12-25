import { withRouter } from 'react-router'
import { useLocation } from 'react-router-dom';
import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { useParams } from "react-router-dom";


const ProductPage = () => {
    const { state } = useLocation()
    // var [prd_details, setPrdDetail] = useState(state)
    // const {prd_name : name, current_price, specs, thumbnails, share_url} = state.prd_details;
    console.log(state);
    function get_data() {
        console.log(state.qs);
        fetch(state.qs, {
            mode: 'cors'
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                prd_details.push(data)
            });
    }
    get_data();
    return (
        <>
            <section className='bg-slate-200 min-h-[75vh]' >
                <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
                    <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-1">

                            <div className="grid grid-cols-2 gap-4 lg:mt-4">
                                {
                                    thumbnails.map((img, key) => {
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
                                        {name}
                                    </h1>

                                </div>

                                <p className="text-lg font-bold">₹{current_price}</p>
                            </div>

                            <details
                                className="group relative mt-4 [&_summary::-webkit-details-marker]:hidden"
                            >
                                <summary className="block">
                                    <div>
                                        <div className="prose max-w-none group-open:hidden">
                                            <p>
                                                <ul>
                                                    {specs.map((feature, key) => {
                                                        return (<li>{feature}</li>)
                                                    })}
                                                </ul>

                                            </p>
                                        </div>


                                    </div>
                                </summary>

                            </details>

                            <form className="mt-8">
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
                                    <a target="_blank" href={url}><button
                                        className="block px-5 py-3 ml-3 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-500"
                                    >
                                        View on Amazon
                                    </button>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ProductPage