import React from 'react'

const ProductCards = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto min-w-fit">
                <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={
                    {
                        backgroundImage: 'https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'
                    }
                } ></div>

                <div className="w-56 -mt-10 overflow-hidden  rounded-lg shadow-lg md:w-64  bg-none backdrop-blur-sm">
                    <h3 className="py-2 font-bold tracking-wide text-center  uppercase text-white">Nike Revolt</h3>

                    <div className="font-bold text-center text-gray-200">$129</div>
                    <div className="flex items-center justify-between px-3 py-2  ">
                        <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-600 focus:bg-gray-600 focus:outline-none tracking-wider">Buy</button>
                        <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-600 focus:bg-gray-600 focus:outline-none tracking-wider">Details</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCards