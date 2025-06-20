import React, { useEffect } from 'react';
import { Container, Row, Col, Form, FormLabel, FormGroup, FormControl, Button, FormSelect } from 'react-bootstrap';
import "../style/Register.css"

function Register() {
    useEffect(() => {
        document.body.style.backgroundColor = "currentColor";
        return () => {
            document.body.style.backgroundColor = "";
        }
    })
    return (


        <Container>
            <Row>
                <Col id="registerCol">
                    <div>
                        <Form id="registerForm">
                            <FormLabel>Register Panel</FormLabel>
                            <FormGroup>
                                <FormControl type="text" placeholder="UserName" />
                                <FormControl type="text" placeholder="LastName" />
                                <FormControl type="text" placeholder="Gmail" />
                                <FormControl type="text" placeholder="Address" />
                                <FormSelect>
                                    <option>Tehren</option>
                                    <option>Karaj</option>
                                    <option>Esfahan</option>
                                    <option>Ardebil</option>
                                    <option>Shiraz</option>
                                </FormSelect>
                                <div id="BtnDiv">
                                    <Button id="submit" className="btn-primary">Submit</Button>
                                </div>
                            </FormGroup>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default Register;