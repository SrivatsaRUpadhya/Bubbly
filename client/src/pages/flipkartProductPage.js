import { withRouter } from 'react-router'
import React, { useRef, useState } from 'react'
import { useEffect } from 'react'


const FlipkartProductPage = () => {
    const [prd_details, set_product_details] = useState([]);
    const [loading, setLoading] = useState(true);

    const effectRan = useRef(false)

    const url = new URL(window.location.href);
    const params = url.searchParams;
    const qs = params.get('url');


    useEffect(() => {
        if (effectRan.current == false) {
            console.log("Running once");
            fetch(`http://localhost:8000/product?url=${qs}`, {
                mode: 'cors',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }).then(response => response.json())
                .then(data => {
                    set_product_details(data)
                    console.log(set_product_details);
                    setLoading(false);
                })
            effectRan.current = true
        }
    }, [])

    useEffect(() => {
        console.log(loading);
    }, [loading])


    if ((prd_details.length) != 0) {

        return (
            <>
                <section className='min-h-[75vh]'  data-theme = "dracula">
                    <div className="relative max-w-full px-4 py-8 mx-auto">
                        <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
                            <div className="">

                                <div className="grid grid-cols-2 gap-4 lg:mt-4">
                                    {
                                        prd_details.thumbnails.map((img, key) => {
                                            var new_img = img.replace(/[0-9][0-9][0-9]\//g, "1024/");
                                            return (
                                                <div className='max-w-full flex'>
                                                    <div key={key} className='' >
                                                        <img
                                                            alt={key}
                                                            src={new_img}
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
                                        <h1 className="text-2xl font-bold">
                                            {prd_details.name}
                                        </h1>

                                    </div>


                                </div>
                                <div className="text-xl font-bold mt-10 pl-10">₹{prd_details.current_price}</div>
                                <a target="_blank" href={prd_details.share_url}><button
                                    className="block px-5 py-3 ml-3 text-xs font-medium m-5 bg-green-600 rounded hover:bg-green-500"
                                >
                                    View on Flipkart
                                </button>
                                </a>
                                <details
                                    className="group relative mt-4 [&_summary::-webkit-details-marker]:hidden"
                                >
                                    <summary className="block">
                                        <div>
                                            <div className="prose max-w-none">
                                                <p>
                                                    <ul>
                                                        {prd_details.highlights.map((feature, key) => {
                                                            return (<li>{feature}</li>)
                                                        })}
                                                    </ul>

                                                </p>
                                            </div>
                                        </div>

                                        <table className='table-auto'>
                                            {prd_details.specs.length != 0 && <div>
                                                {prd_details.specs.map((spec, key) => {
                                                    return (
                                                        <tr key={key} className='border-[0.25px] border-slate-800'>
                                                            <th>{spec.title}</th>
                                                            {spec.details.map((detail, key1) => {
                                                                return (
                                                                    <tr key={key1}>
                                                                        <td className = 'ml-5 pb-8'>{detail.property}</td>
                                                                        <td className = 'ml-5 pb-8'>{detail.value}</td>
                                                                    </tr>
                                                                )
                                                            })}
                                                        </tr>
                                                    )
                                                })}
                                            </div>
                                            }
                                        </table>
                                    </summary>

                                </details>
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

export default FlipkartProductPage
