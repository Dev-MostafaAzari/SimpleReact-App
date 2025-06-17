import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, Carousel, CarouselItem, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import "../style/Home.css"
import { Link } from "react-router-dom";

function Home() {
    useEffect(() => {
        document.body.style.backgroundColor = "#7FCDCD";
        return () => {
            document.body.style.backgroundColor = "";
        }
    })
    var [active, setActive] = useState("tab1")
    function select(x) {
        setActive(x)

    }



    return (
        <div>
            <div className="">
                <div id="divCar">
                    <Carousel>
                        <CarouselItem>
                            <img src="/imgs/6.jpg" alt="firstPic" className="d-block w-100" />
                            <Carousel.Caption>
                                <h3>avali</h3>
                                <p>this is a firstPic for carousel</p>
                            </Carousel.Caption>
                        </CarouselItem>
                        <CarouselItem>
                            <img src="/imgs/7.jpg" alt="secPic" className="d-block w-100" />
                            <Carousel.Caption>
                                <h3>dovomi</h3>
                                <p>this is a secoundPic for carousel</p>
                            </Carousel.Caption>
                        </CarouselItem>
                        <CarouselItem>
                            <img src="/imgs/8.jpg" alt="thirdPic" className="d-block w-100" />
                            <Carousel.Caption>
                                <h3>sevomi</h3>
                                <p>this is a thirdPic for carousel</p>
                            </Carousel.Caption>
                        </CarouselItem>
                    </Carousel>
                </div>
                <Tabs activeKey={active} onSelect={select} id="Tabs" className="nav  nav-fill fs-4">
                    <Tab className="Tabes" eventKey={"tab1"} title="Steam">
                        <Container id="tabsCards">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugiat placeat rem veniam ipsum doloribus quisquam corrupti qui tempora facere quo assumenda eaque sit mollitia, excepturi repellat possimus impedit quasi</p>
                            <Row className="justify-content-center">
                                <Col className="col-12">
                                    <Row lg={4} md={3} xs={2} className="justify-content-start">
                                        <Col>
                                            <Link>
                                                <Card className="mt-3">
                                                    <CardBody>
                                                        <Card.Img src="/imgs/5.jpg" />
                                                        <CardTitle><span>SteamGiftCard</span></CardTitle>
                                                    </CardBody>
                                                </Card>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Link>
                                                <Card className="mt-3">
                                                    <CardBody>
                                                        <Card.Img src="/imgs/5.jpg" />
                                                        <CardTitle>SteamGames</CardTitle>
                                                    </CardBody>
                                                </Card>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Link>
                                                <Card className="mt-3">
                                                    <CardBody>
                                                        <Card.Img src="/imgs/5.jpg" />
                                                        <CardTitle>SteamGames</CardTitle>
                                                    </CardBody>
                                                </Card>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Tab>
                    <Tab className="Tabes" eventKey={"tab2"} title="Xbox">
                        <Container id="tabsCards">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugiat placeat rem veniam ipsum doloribus quisquam corrupti qui tempora facere quo assumenda eaque sit mollitia</p>
                            <Row className="justify-content-center">
                                <Col className="col-12">
                                    <Row lg={4} md={3} xs={2} className="justify-content-start">
                                        <Col>
                                            <Link>
                                                <Card className="mt-3">
                                                    <CardBody>
                                                        <Card.Img src="/imgs/5.jpg" />
                                                        <CardTitle><span>XboxGiftCard</span></CardTitle>
                                                    </CardBody>
                                                </Card>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Link>
                                                <Card className="mt-3">
                                                    <CardBody>
                                                        <Card.Img src="/imgs/5.jpg" />
                                                        <CardTitle>XboxGames</CardTitle>
                                                    </CardBody>
                                                </Card>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Link>
                                                <Card className="mt-3">
                                                    <CardBody>
                                                        <Card.Img src="/imgs/5.jpg" />
                                                        <CardTitle>XboxGamePass</CardTitle>
                                                    </CardBody>
                                                </Card>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Link>
                                                <Card className="mt-3">
                                                    <CardBody>
                                                        <Card.Img src="/imgs/5.jpg" />
                                                        <CardTitle>XboxAccount</CardTitle>
                                                    </CardBody>
                                                </Card>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Tab>
                    <Tab className="Tabes" eventKey={"tab3"} title="Playstation">
                        <Container id="tabsCards">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officia impedit, blanditiis nulla consequuntur inventore! Nobis numquam ea consequuntur asperiores nostrum ad, nulla, sit dolorem qui fugit dolorum! Voluptatem, adipisci.</p>
                            <Row className="justify-content-center">
                                <Col className="col-12">
                                    <Row lg={4} md={3} xs={2} className="justify-content-start">
                                        <Col>
                                            <Link>
                                                <Card className="mt-3">
                                                    <CardBody>
                                                        <Card.Img src="/imgs/5.jpg" />
                                                        <CardTitle><span>PsnGiftCard</span></CardTitle>
                                                    </CardBody>
                                                </Card>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Link>
                                                <Card className="mt-3">
                                                    <CardBody>
                                                        <Card.Img src="/imgs/5.jpg" />
                                                        <CardTitle>PlusGames</CardTitle>
                                                    </CardBody>
                                                </Card>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Link>
                                                <Card className="mt-3">
                                                    <CardBody>
                                                        <Card.Img src="/imgs/5.jpg" />
                                                        <CardTitle>Plus</CardTitle>
                                                    </CardBody>
                                                </Card>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Link>
                                                <Card className="mt-3">
                                                    <CardBody>
                                                        <Card.Img src="/imgs/5.jpg" />
                                                        <CardTitle>PsnAccount</CardTitle>
                                                    </CardBody>
                                                </Card>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Tab>
                </Tabs>
            </div>
        </div>
    )
}

export default Home;