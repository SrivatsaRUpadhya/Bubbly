import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const ProductCardFlipkart = ({ productsFlipkart }) => {

    const { name, thumbnail, link, current_price, query_url } = productsFlipkart;
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = 'product/flipkart'; 
        navigate(path, {state : {"qs" : query_url}});
  }
    function prd_page() {
            routeChange();
    };

    return (
        
        <>
            

            <Row xs={1} md={2} className="g-4">
                <Col>
                    {/* <a href={link}> */}
                    <Card>
                        <Card.Img className = "m-auto" variant="top" src={thumbnail} />
                        <Card.Body className = "text-center">
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                ₹{current_price}
                            </Card.Text>
                            {/* <Link to={`/product/${query_url}`}>
                            <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-600 focus:bg-gray-600 focus:outline-none tracking-wider">Details</button>
                            </Link> */}

                        </Card.Body>
                    </Card>
                    {/* </a> */}
                </Col>
            </Row>
        </>
    )
}

export default ProductCardFlipkart