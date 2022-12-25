import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const ProductCardAmazon = ({ productsAmazon }) => {


    const { title: name, thumbnail: thumbnails, url: share_url, price, asin } = productsAmazon;

    return (
        <>
            {/* <Link to='/product/page'>
                <div onClick={(e)=>{e.stopPropagation()}} className="flex flex-col items-center justify-center w-full max-w-sm mx-auto min-w-fit">
                    <div className="w-full h-64 bg-gray-300 bg-center bg-contain bg-no-repeat rounded-lg shadow-md" style={
                        {
                            backgroundImage: `url(${thumbnails})`
                        }
                    } ></div>

                    <div className="w-56 -mt-10 overflow-hidden  rounded-lg shadow-lg md:w-64  text-gray-100 bg-none backdrop-brightness-50 backdrop-blur-sm">
                        <h3 className="py-2 font-bold tracking-wide text-center  uppercase ">{name}</h3>

                        <div className="font-bold text-center ">₹ {price.current_price}</div>
                        <div className="flex items-center justify-between px-3 py-2  ">
                            <a href={share_url} target='_blank' ><button className="px-2 py-1 text-xs font-semibold  uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-600 focus:bg-gray-600 focus:outline-none tracking-wider text-gray-100 ">Buy</button></a>
                            <Link to={{pathname : `/product/${asin}`}}>
                                <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-600 focus:bg-gray-600 focus:outline-none tracking-wider">Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Link> */}

            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card className="text-center">
                        <a href={share_url}>
                            <Card.Img className="m-auto" variant="top" src={thumbnails} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    ₹{price.current_price}
                                </Card.Text>

                            </Card.Body>
                        </a>
                        <Link to={{ pathname: `/product/${asin}` }}>
                            <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-600 focus:bg-gray-600 focus:outline-none tracking-wider">Details</button>
                        </Link>
                    </Card>
                </Col>
            </Row>

        </>
    )
}

export default ProductCardAmazon