import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, Carousel, CarouselItem, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import "../style/Home.css"
import { Link } from "react-router-dom";
import myPhoto from "../assets/5.jpg";
import img1 from "../assets/6.jpg";
import img2 from "../assets/7.jpg";
import img3 from "../assets/8.jpg";

function Home() {
    useEffect(() => {
        document.body.style.backgroundColor = "currentColor";
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
                            <img src={img1} alt="firstPic" className="d-block w-100" />
                            <Carousel.Caption>
                                <h3>First</h3>
                                <p>This is a First Picture !</p>
                            </Carousel.Caption>
                        </CarouselItem>
                        <CarouselItem>
                            <img src={img2} alt="secPic" className="d-block w-100" />
                            <Carousel.Caption>
                                <h3>Secound</h3>
                                <p>This is a Secound Picture !</p>
                            </Carousel.Caption>
                        </CarouselItem>
                        <CarouselItem>
                            <img src={img3} alt="thirdPic" className="d-block w-100" />
                            <Carousel.Caption>
                                <h3>Third</h3>
                                <p>This is a Third Picture !</p>
                            </Carousel.Caption>
                        </CarouselItem>
                    </Carousel>
                </div>
                <Tabs activeKey={active} onSelect={select} id="Tabs" className="nav  nav-fill fs-4 row-cols-3">
                    <Tab className="Tabes col" eventKey={"tab1"} title="Steam">
                        <Container id="tabsCards">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugiat placeat rem veniam ipsum doloribus quisquam corrupti qui tempora facere quo assumenda eaque sit mollitia, excepturi repellat possimus impedit quasi</p>
                            <Row className="justify-content-center">
                                <Col className="col-12">
                                    <Row lg={4} md={3} xs={2} className="justify-content-start">
                                        <Col>
                                            <Link>
                                                <Card className="mt-3">
                                                    <CardBody>
                                                        <Card.Img src={myPhoto} />
                                                        <CardTitle><span>SteamGiftCard</span></CardTitle>
                                                    </CardBody>
                                                </Card>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Link>
                                                <Card className="mt-3">
                                                    <CardBody>
                                                        <Card.Img src={myPhoto} />
                                                        <CardTitle>SteamGames</CardTitle>
                                                    </CardBody>
                                                </Card>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Link>
                                                <Card className="mt-3">
                                                    <CardBody>
                                                        <Card.Img src={myPhoto} />
                                                        <CardTitle>SteamGames</CardTitle>
                                                    </CardBody>
                                                </Card>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Link>
                                                <Card className="mt-3">
                                                    <CardBody>
                                                        <Card.Img src={myPhoto} />
                                                        <CardTitle>SteamAccount</CardTitle>
                                                    </CardBody>
                                                </Card>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Tab>
                    <Tab className="Tabes col" eventKey={"tab2"} title="Xbox">
                        <Container id="tabsCards">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugiat placeat rem veniam ipsum doloribus quisquam corrupti qui tempora facere quo assumenda eaque sit mollitia</p>
                            <Row className="justify-content-center">
                                <Col className="col-12">
                                    <Row lg={4} md={3} xs={2} className="justify-content-start">
                                        <Col>
                                            <Link>
                                                <Card className="mt-3">
                                                    <CardBody>
                                                        <Card.Img src={myPhoto} />
                                                        <CardTitle><span>XboxGiftCard</span></CardTitle>
                                                    </CardBody>
                                                </Card>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Link>
                                                <Card className="mt-3">
                                                    <CardBody>
                                                        <Card.Img src={myPhoto} />
                                                        <CardTitle>XboxGames</CardTitle>
                                                    </CardBody>
                                                </Card>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Link>
                                                <Card className="mt-3">
                                                    <CardBody>
                                                        <Card.Img src={myPhoto} />
                                                        <CardTitle>XboxGamePass</CardTitle>
                                                    </CardBody>
                                                </Card>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Link>
                                                <Card className="mt-3">
                                                    <CardBody>
                                                        <Card.Img src={myPhoto} />
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
                    <Tab className="Tabes col" eventKey={"tab3"} title="Psn">
                        <Container id="tabsCards">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officia impedit, blanditiis nulla consequuntur inventore! Nobis numquam ea consequuntur asperiores nostrum ad, nulla, sit dolorem qui fugit dolorum! Voluptatem, adipisci.</p>
                            <Row className="justify-content-center">
                                <Col className="col-12">
                                    <Row lg={4} md={3} xs={2} className="justify-content-start">
                                        <Col>
                                            <Link>
                                                <Card className="mt-3">
                                                    <CardBody>
                                                        <Card.Img src={myPhoto} />
                                                        <CardTitle><span>PsnGiftCard</span></CardTitle>
                                                    </CardBody>
                                                </Card>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Link>
                                                <Card className="mt-3">
                                                    <CardBody>
                                                        <Card.Img src={myPhoto} />
                                                        <CardTitle>PlusGames</CardTitle>
                                                    </CardBody>
                                                </Card>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Link>
                                                <Card className="mt-3">
                                                    <CardBody>
                                                        <Card.Img src={myPhoto} />
                                                        <CardTitle>Plus</CardTitle>
                                                    </CardBody>
                                                </Card>
                                            </Link>
                                        </Col>
                                        <Col>
                                            <Link>
                                                <Card className="mt-3">
                                                    <CardBody>
                                                        <Card.Img src={myPhoto} />
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