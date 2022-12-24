import React from 'react'

const ProductCards = (props) => {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto min-w-fit">
                <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={
                    {
                        backgroundImage: props.img_url
                    }
                } ></div>

                <div className="w-56 -mt-10 overflow-hidden  rounded-lg shadow-lg md:w-64  bg-none backdrop-blur-sm">
                    <h3 className="py-2 font-bold tracking-wide text-center  uppercase text-white">{props.title}</h3>

                    <div className="font-bold text-center text-gray-200">{props.price}</div>
                    <div className="flex items-center justify-between px-3 py-2  ">
                        <a href={props.link}><button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-600 focus:bg-gray-600 focus:outline-none tracking-wider">Buy</button></a>
                        <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-600 focus:bg-gray-600 focus:outline-none tracking-wider">Details</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCards