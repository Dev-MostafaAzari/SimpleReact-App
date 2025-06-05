import React from 'react';
import { Container, Card, Row, Col, Button, ButtonGroup, CardLink, CardText, CardTitle, Accordion, AccordionItem, AccordionHeader, AccordionBody } from 'react-bootstrap';



function Products() {
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
                </Col>
                <Col className="col-xl-9 col-lg-10 col-md-8 col-sm-8 col-12">
                    <Row xs={2} md={3} lg={4} className="justify-content-center">
                        <Col>
                            <Card className="mt-3">
                                <Card.Body className="text-center">
                                    <CardTitle className="text-center">Product-1</CardTitle>
                                    <Card.Img src="/imgs/5.jpg"></Card.Img>
                                    <CardText className="text-center">this is a test text for product!</CardText>
                                    <CardLink>
                                        <ButtonGroup dir='ltr'>
                                            <Button variant='success'>Order</Button>
                                            <Button variant='info'>Info</Button>
                                        </ButtonGroup>
                                    </CardLink>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="mt-3">
                                <Card.Body className="text-center">
                                    <CardTitle className="text-center">Product-1</CardTitle>
                                    <Card.Img src="/imgs/5.jpg"></Card.Img>
                                    <CardText className="text-center">this is a test text for product!</CardText>
                                    <CardLink>
                                        <ButtonGroup dir='ltr'>
                                            <Button variant='success'>Order</Button>
                                            <Button variant='info'>Info</Button>
                                        </ButtonGroup>
                                    </CardLink>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="mt-3">
                                <Card.Body className="text-center">
                                    <CardTitle className="text-center">Product-1</CardTitle>
                                    <Card.Img src="/imgs/5.jpg"></Card.Img>
                                    <CardText className="text-center">this is a test text for product!</CardText>
                                    <CardLink>
                                        <ButtonGroup dir='ltr'>
                                            <Button variant='success'>Order</Button>
                                            <Button variant='info'>Info</Button>
                                        </ButtonGroup>
                                    </CardLink>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="mt-3">
                                <Card.Body className="text-center">
                                    <CardTitle className="text-center">Product-1</CardTitle>
                                    <Card.Img src="/imgs/5.jpg"></Card.Img>
                                    <CardText className="text-center">this is a test text for product!</CardText>
                                    <CardLink>
                                        <ButtonGroup dir='ltr'>
                                            <Button variant='success'>Order</Button>
                                            <Button variant='info'>Info</Button>
                                        </ButtonGroup>
                                    </CardLink>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="mt-3">
                                <Card.Body className="text-center">
                                    <CardTitle className="text-center">Product-1</CardTitle>
                                    <Card.Img src="/imgs/5.jpg"></Card.Img>
                                    <CardText className="text-center">this is a test text for product!</CardText>
                                    <CardLink>
                                        <ButtonGroup dir='ltr'>
                                            <Button variant='success'>Order</Button>
                                            <Button variant='info'>Info</Button>
                                        </ButtonGroup>
                                    </CardLink>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="mt-3">
                                <Card.Body className="text-center">
                                    <CardTitle className="text-center">Product-1</CardTitle>
                                    <Card.Img src="/imgs/5.jpg"></Card.Img>
                                    <CardText className="text-center">this is a test text for product!</CardText>
                                    <CardLink>
                                        <ButtonGroup dir='ltr'>
                                            <Button variant='success'>Order</Button>
                                            <Button variant='info'>Info</Button>
                                        </ButtonGroup>
                                    </CardLink>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="mt-3">
                                <Card.Body className="text-center">
                                    <CardTitle className="text-center">Product-1</CardTitle>
                                    <Card.Img src="/imgs/5.jpg"></Card.Img>
                                    <CardText className="text-center">this is a test text for product!</CardText>
                                    <CardLink>
                                        <ButtonGroup dir='ltr'>
                                            <Button variant='success'>Order</Button>
                                            <Button variant='info'>Info</Button>
                                        </ButtonGroup>
                                    </CardLink>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="mt-3">
                                <Card.Body className="text-center">
                                    <CardTitle className="text-center">Product-1</CardTitle>
                                    <Card.Img src="/imgs/5.jpg"></Card.Img>
                                    <CardText className="text-center">this is a test text for product!</CardText>
                                    <CardLink>
                                        <ButtonGroup dir='ltr'>
                                            <Button variant='success'>Order</Button>
                                            <Button variant='info'>Info</Button>
                                        </ButtonGroup>
                                    </CardLink>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}

export default Products;