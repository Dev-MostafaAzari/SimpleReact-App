import React, { useContext } from 'react';
import { ListGroup, ListGroupItem, Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { OffcanvosCon } from '../contexts/OffcanvasContext';

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
                    <ListGroup>
                        <ListGroupItem><Link>Profile</Link></ListGroupItem>
                        <ListGroupItem><Link>History</Link></ListGroupItem>
                        <ListGroupItem><Link>Support</Link></ListGroupItem>
                        <ListGroupItem><Link>LogOut</Link></ListGroupItem>
                    </ListGroup>
                </OffcanvasBody>
            </Offcanvas>
        </div>


    )
}



export default Offcan;