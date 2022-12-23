import React from 'react'
import ProductCards from './ProductCards'

const ProductList = () => {

    const products = [
        {
            "product_id": "76-0730577",
            "product_name": "Web"
        }, {
            "product_id": "14-9901782",
            "product_name": "Lowe"
        }, {
            "product_id": "96-4753384",
            "product_name": "Theadora"
        }, {
            "product_id": "55-9464268",
            "product_name": "Caddric"
        }, {
            "product_id": "60-2442976",
            "product_name": "Giorgi"
        }, {
            "product_id": "62-7233720",
            "product_name": "Melisande"
        }, {
            "product_id": "26-9205253",
            "product_name": "Wally"
        }, {
            "product_id": "00-7950538",
            "product_name": "Bridget"
        }, {
            "product_id": "42-4897963",
            "product_name": "Elsworth"
        }, {
            "product_id": "41-8439520",
            "product_name": "Ezekiel"
        }, {
            "product_id": "32-9300764",
            "product_name": "Cally"
        }, {
            "product_id": "68-6267469",
            "product_name": "Jocelyn"
        }, {
            "product_id": "02-7338858",
            "product_name": "Kelsy"
        }, {
            "product_id": "56-9330135",
            "product_name": "Danette"
        }, {
            "product_id": "79-9530825",
            "product_name": "Hersh"
        }, {
            "product_id": "15-5584670",
            "product_name": "Miguel"
        }, {
            "product_id": "93-3794795",
            "product_name": "Elle"
        }, {
            "product_id": "73-8693556",
            "product_name": "Kayla"
        }, {
            "product_id": "14-0768733",
            "product_name": "Sallyann"
        }, {
            "product_id": "86-9410554",
            "product_name": "Lizette"
        }, {
            "product_id": "85-6985089",
            "product_name": "Margot"
        }, {
            "product_id": "44-1988456",
            "product_name": "Melisent"
        }, {
            "product_id": "24-5802544",
            "product_name": "Baldwin"
        }, {
            "product_id": "64-4303328",
            "product_name": "Mechelle"
        }, {
            "product_id": "49-5673110",
            "product_name": "Dacey"
        }, {
            "product_id": "68-6801376",
            "product_name": "Arch"
        }, {
            "product_id": "84-0722988",
            "product_name": "Cornelia"
        }, {
            "product_id": "83-6207300",
            "product_name": "Chrisy"
        }, {
            "product_id": "92-7703521",
            "product_name": "Kristofer"
        }, {
            "product_id": "21-4064369",
            "product_name": "Waldemar"
        }, {
            "product_id": "88-8301093",
            "product_name": "Bert"
        }, {
            "product_id": "26-2257183",
            "product_name": "Corry"
        }, {
            "product_id": "51-7467155",
            "product_name": "Jared"
        }, {
            "product_id": "87-7701829",
            "product_name": "Leshia"
        }, {
            "product_id": "73-5995746",
            "product_name": "Barde"
        }, {
            "product_id": "14-2453212",
            "product_name": "Judy"
        }, {
            "product_id": "39-3402238",
            "product_name": "Tades"
        }, {
            "product_id": "14-3944164",
            "product_name": "Gualterio"
        }, {
            "product_id": "91-7726593",
            "product_name": "Britney"
        }, {
            "product_id": "24-7196886",
            "product_name": "Ardella"
        }, {
            "product_id": "80-7839673",
            "product_name": "Tonnie"
        }, {
            "product_id": "01-8875168",
            "product_name": "Grantham"
        }, {
            "product_id": "19-4722333",
            "product_name": "Rycca"
        }, {
            "product_id": "05-5155840",
            "product_name": "Damien"
        }, {
            "product_id": "38-0692091",
            "product_name": "Averyl"
        }, {
            "product_id": "20-3372036",
            "product_name": "Orland"
        }, {
            "product_id": "74-9112770",
            "product_name": "Roderich"
        }, {
            "product_id": "41-3302670",
            "product_name": "Sherie"
        }, {
            "product_id": "65-6397353",
            "product_name": "Hugues"
        }, {
            "product_id": "40-2900413",
            "product_name": "Karlotta"
        }
    ]


    return (
        <div className='bg-gray-200 pt-10 '>
            <p className="text-xl text-center text-gray-500">
                Search and Choose your Products
            </p>
            <div className='w-fit mx-auto mt-5 ' >
                <input type="text" class="w-fit mx-auto py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Search" />
                <button className=" px-6 py-2 mt-2 ml-6 text-white bg-[#172439] rounded-lg focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"> Search </button>
            </div>
            <div className="flex  justify-evenly">

                <div className='w-5/12 ' >

                    <h1 className="mt-4 text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl ">Amazon products</h1>
                    <div className='h-16 ' />

                    <div className="grid grid-cols-2 gap-7  overflow-y-scroll max-h-screen ">
                        {products.map((product, key) => {
                            return (
                                <div key={key} className='min-w-fit' >
                                    <ProductCards />
                                </div>
                            )
                        })
                        }
                    </div>

                </div>

                <div className='w-5/12' >

                    <h1 className="mt-4 text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl ">Flipkart products</h1>
                    <div className='h-16' />

                    <div className="grid grid-cols-2 gap-7 overflow-y-scroll max-h-screen  ">
                        {products.map((product, key) => {
                            return (
                                <div key={key} className='min-w-fit' >
                                    <ProductCards />
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