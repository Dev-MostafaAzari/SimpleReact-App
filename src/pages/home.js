import React from "react";
import {Carousel, CarouselItem, Col, Container, Row} from "react-bootstrap";
import "../style/Home.css"

function Home(){
    return(
        <div>
           <div id="divCar" className="">
                <Carousel>
                        <CarouselItem>
                            <img src="/imgs/6.jpg" alt="firstPic" className="d-block w-100"/>
                            <Carousel.Caption>
                                <h3>avali</h3>
                                <p>this is a firstPic for carousel</p>
                            </Carousel.Caption>
                        </CarouselItem>
                        <CarouselItem>
                            <img src="/imgs/7.jpg" alt="secPic"  className="d-block w-100" />
                            <Carousel.Caption>
                                <h3>dovomi</h3>
                                <p>this is a secoundPic for carousel</p>
                            </Carousel.Caption>
                        </CarouselItem>
                        <CarouselItem>
                            <img src="/imgs/8.jpg" alt="thirdPic" className="d-block w-100"/>
                            <Carousel.Caption>
                                <h3>sevomi</h3>
                                <p>this is a thirdPic for carousel</p>
                            </Carousel.Caption>
                        </CarouselItem>
                    </Carousel>
           </div>
        </div>
    )
}

export default Home;