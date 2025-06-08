import React, { useContext } from 'react';
import { ListGroup, ListGroupItem, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { OffcanvosCon } from '../contexts/OffcanvasContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle,faArchive,faPhone,faSignOut } from '@fortawesome/free-solid-svg-icons';



function Offcan() {
    var {showcan,Close}=useContext(OffcanvosCon);
    return (
        <div>
            <Offcanvas show={showcan} onHide={Close} placement="start">
                <OffcanvasHeader closeButton>
                    <OffcanvasTitle>
                        Profile
                    </OffcanvasTitle>
                </OffcanvasHeader>
                <OffcanvasBody>
                    <ListGroup className="fs-5">
                        <ListGroupItem><Link className="text-decoration-none"><FontAwesomeIcon icon={faUserCircle} className="me-1"/>Profile</Link></ListGroupItem>
                        <ListGroupItem><Link className="text-decoration-none"><FontAwesomeIcon icon={faArchive} className="me-1"/>History</Link></ListGroupItem>
                        <ListGroupItem><Link className="text-decoration-none"><FontAwesomeIcon icon={faPhone} className="me-1"/>Support</Link></ListGroupItem>
                        <ListGroupItem><Link className="text-decoration-none link-danger"><FontAwesomeIcon icon={faSignOut} className="me-1"/>LogOut</Link></ListGroupItem>
                    </ListGroup>
                </OffcanvasBody>
            </Offcanvas>
        </div>


    )
}



export default Offcan;