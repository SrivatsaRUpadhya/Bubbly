import React from 'react'

const Hero = () => {
    return (
        <>
            <header className="bg-gray-900 min-h-[80vh] ">
                <div className="container px-6 py-16 mx-auto">
                    <div className="items-center lg:flex">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h1 className="text-3xl font-semibold text-white lg:text-4xl">Best Place To choose your Clothes</h1>

                                <p className="mt-4 text-gray-400">This is int he file hero.js in the folder components. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.</p>

                                <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Shop Now</button>
                            </div>
                        </div>

                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <img className="w-full h-full lg:max-w-3xl" src="/images/hero.svg" alt="Catalogue-pana.svg" />
                        </div>
                    </div>
                </div>
            </header >
        </>
    )
}

export default Hero