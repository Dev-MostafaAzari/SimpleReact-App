import React, { useContext } from 'react';
import { Col, ListGroup, ListGroupItem, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { OffcanvosCon } from '../contexts/OffcanvasContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faArchive, faPhone, faSignOut } from '@fortawesome/free-solid-svg-icons';
import "../style/Offcanvas.css"


function Offcan() {
    var { showcan, Close } = useContext(OffcanvosCon);
    return (
        <div>
            <Offcanvas show={showcan} onHide={Close} placement="start">
                <OffcanvasHeader closeButton>
                    <OffcanvasTitle>
                        Menu
                    </OffcanvasTitle>
                </OffcanvasHeader>
                <OffcanvasBody>
                    <Row className="row-cols-1">
                        <Col className="text-center">
                            <img src="/imgs/5.jpg" width={100} className="rounded-pill" alt="ProfilePic" />
                        </Col>
                        <Col> 
                            <ListGroup className="fs-5 mt-3">
                                <ListGroupItem><Link className="text-decoration-none"><FontAwesomeIcon icon={faUserCircle} className="me-1" />Profile</Link></ListGroupItem>
                                <ListGroupItem><Link className="text-decoration-none"><FontAwesomeIcon icon={faArchive} className="me-1" />History</Link></ListGroupItem>
                                <ListGroupItem><Link className="text-decoration-none"><FontAwesomeIcon icon={faPhone} className="me-1" />Support</Link></ListGroupItem>
                                <ListGroupItem><Link className="text-decoration-none link-danger"><FontAwesomeIcon icon={faSignOut} className="me-1" />LogOut</Link></ListGroupItem>
                            </ListGroup>
                        </Col>
                    </Row>

                </OffcanvasBody>
            </Offcanvas>
        </div>


    )
}



export default Offcan;