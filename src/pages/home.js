import React, { useEffect, useState } from "react";
import {Carousel, CarouselItem,Tab, Tabs} from "react-bootstrap";
import "../style/Home.css"

function Home(){
    useEffect(()=>{
        document.body.style.backgroundColor="#7FCDCD";
        return()=>{
            document.body.style.backgroundColor="";
        }
    })
    var [active,setActive]=useState("tab1")
    function select (x){
        setActive(x)

    }



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

                <Tabs activeKey={active} onSelect={select} id="Tabs" className="mt-3 nav-pill bg-white nav-fill fs-4">
                    <Tab className="Tabes" eventKey={"tab1"} title="Title-1">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptas asperiores. Dignissimos odio atque ipsam numquam at aliquam quis magnam ea iusto, natus nemo consequuntur eveniet! Et, illo? Delectus, optio!</p>
                    </Tab>
                    <Tab className="Tabes"  eventKey={"tab2" }title="Title-2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugiat placeat rem veniam ipsum doloribus quisquam corrupti qui tempora facere quo assumenda eaque sit mollitia, excepturi repellat possimus impedit quasi</p>
                    </Tab>
                    <Tab className="Tabes" eventKey={"tab3"} title="Title-3">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis officia impedit, blanditiis nulla consequuntur inventore! Nobis numquam ea consequuntur asperiores nostrum ad, nulla, sit dolorem qui fugit dolorum! Voluptatem, adipisci.</p>
                    </Tab>
                </Tabs>
           </div>
        </div>
    )
}

export default Home;