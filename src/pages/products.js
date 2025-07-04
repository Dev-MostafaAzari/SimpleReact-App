import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col, CardText, Accordion, AccordionItem, AccordionHeader, AccordionBody, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../style/Product.css";
import myPhoto from "../assets/5.jpg";


function Products() {
    useEffect(() => {
        document.body.style.backgroundColor = "currentColor";
        return () => {
            document.body.style.backgroundColor = ""
        }
    })
    var [value, setValue] = useState("0")
    function Price(event) {
        setValue(event.target.value)
    }
    return (
        <Container>
            <Row dir="rtl" className="justify-content-around">
                <Col className="col-xl-3  col-12">
                    <Accordion className="mt-3">
                        <AccordionItem eventKey="0">
                            <AccordionHeader>Header</AccordionHeader>
                            <AccordionBody>Body</AccordionBody>
                        </AccordionItem>
                    </Accordion>
                    <Accordion>
                        <AccordionItem eventKey="1">
                            <AccordionHeader>Price</AccordionHeader>
                            <AccordionBody>
                                <span className="ms-2">{value}$</span><input type="range" min={10} max={15000} step={50} onChange={Price} /><span className="me-2">15000$</span>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>
                </Col>
                <Col id="cardsDiv" className="col-xl-9 col-lg-10 col-md-8 col-sm-8 col-12">
                    <Row xs={2} md={3} lg={4} id="product" className="justify-content-center">
                        <Col>
                            <Link>
                                <Card className="mt-3">
                                    <Card.Body className="text-center">
                                        <Card.Img src={myPhoto}></Card.Img>
                                        <CardText className="text-center">this is a test text for product!</CardText>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link>
                                <Card className="mt-3">
                                    <Card.Body className="text-center">
                                        <Card.Img src={myPhoto}></Card.Img>
                                        <CardText className="text-center">this is a test text for product!</CardText>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link>
                                <Card className="mt-3">
                                    <Card.Body className="text-center">
                                        <Card.Img src={myPhoto}></Card.Img>
                                        <CardText className="text-center">this is a test text for product!</CardText>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                           <Link>
                                <Card className="mt-3">
                                    <Card.Body className="text-center">
                                        <Card.Img src={myPhoto}></Card.Img>
                                        <CardText className="text-center">this is a test text for product!</CardText>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link>
                                <Card className="mt-3">
                                    <Card.Body className="text-center">
                                        <Card.Img src={myPhoto}></Card.Img>
                                        <CardText className="text-center">this is a test text for product!</CardText>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link>
                                <Card className="mt-3">
                                    <Card.Body className="text-center">
                                        <Card.Img src={myPhoto}></Card.Img>
                                        <CardText className="text-center">this is a test text for product!</CardText>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link>
                                <Card className="mt-3">
                                    <Card.Body className="text-center">
                                        <Card.Img src={myPhoto}></Card.Img>
                                        <CardText className="text-center">this is a test text for product!</CardText>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link>
                                <Card className="mt-3">
                                    <Card.Body className="text-center">
                                        <Card.Img src={myPhoto}></Card.Img>
                                        <CardText className="text-center">this is a test text for product!</CardText>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Pagination className="mt-3 justify-content-center">
                <Pagination.Item active><Link></Link>1</Pagination.Item>
                <Pagination.Item><Link></Link>2</Pagination.Item>
                <Pagination.Item><Link></Link>3</Pagination.Item>
                <Pagination.Item><Link></Link>4</Pagination.Item>
                <Pagination.Item><Link></Link>5</Pagination.Item>
            </Pagination>
        </Container>
    )
}

export default Products;