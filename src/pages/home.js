import React from "react";
import {Carousel, CarouselItem, Col, Container, Row} from "react-bootstrap";


function Home(){
    return(
        <div>
           <div className="" style={{width:"100%",overflow:"hidden"}}>
                <Carousel>
                        <CarouselItem>
                            <img src="/imgs/6.jpg" style={{height:"500px",objectFit:"cover"}} alt="firstPic" className="d-block w-100"/>
                            <Carousel.Caption>
                                <h3>avali</h3>
                                <p>this is a firstPic for carousel</p>
                            </Carousel.Caption>
                        </CarouselItem>
                        <CarouselItem>
                            <img src="/imgs/7.jpg" style={{height:"500px",objectFit:"cover"}} alt="secPic"  className="d-block w-100" />
                            <Carousel.Caption>
                                <h3>dovomi</h3>
                                <p>this is a secoundPic for carousel</p>
                            </Carousel.Caption>
                        </CarouselItem>
                        <CarouselItem>
                            <img src="/imgs/8.jpg" style={{height:"500px",objectFit:"cover"}} alt="thirdPic" className="d-block w-100"/>
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