import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";   //bejay inke az halat html base bootstrap estefade konim az component hay onn estefade mikonim


function Modal1() {
    var [show, setShow] = useState(false);

    function ShowModal() {
        setShow(true)
    }
    function CloseModal() {
        setShow(false)
    }
    function Hide(){
        setShow(false)
    }
    return (
        <div>
            <button className="btn btn-success" onClick={ShowModal}>ShowModal</button>
            {/*sakhtar modal dar react-bootstrap be in shekl hast va bayad talash konam dar react intori code bzanam */}
            <Modal show={show} onHide={Hide}>   {/* namayesh modal ro bar asas state show moshakhas mikonim */}
                <Modal.Header closeButton>
                    <Modal.Title>Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>Body</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={CloseModal}>CloseModal</Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}


export default Modal1