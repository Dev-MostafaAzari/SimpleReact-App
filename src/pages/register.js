import React from 'react';
import { Container,Row,Col, Form, FormLabel, FormGroup, FormControl, Button , FormSelect } from 'react-bootstrap';
import "../style/Register.css"

function Register(){
    return(
        
        <Container>
            <Row>
                <Col>
                    <Form id="registerForm">
                        <FormLabel>Register Panel</FormLabel>
                        <FormGroup>
                            <FormControl type="text" placeholder="UserName"/>
                            <FormControl type="text" placeholder="LastName"/>
                            <FormControl type="text" placeholder="Gmail"/>
                            <FormControl type="text" placeholder="Address"/>
                            <FormSelect>
                                <option>Tehren</option>
                                <option>Karaj</option>
                                <option>Esfahan</option>
                                <option>Ardebil</option>
                                <option>Shiraz</option>
                            </FormSelect>
                            <Button id="submit" className="btn-primary form-control">Submit</Button>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        </Container>

    )
}

export default Register;