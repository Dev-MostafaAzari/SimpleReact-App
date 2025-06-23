import React, { useEffect, useState,useContext } from 'react';
import { Container, Row, Col, Form, FormLabel, FormGroup, FormControl, Button, FormSelect, Alert, AlertHeading } from 'react-bootstrap';
import "../style/Register.css"
import { ValidCon } from '../contexts/ValidationContext';

function Register() {
    useEffect(() => {
        document.body.style.backgroundColor = "currentColor";
        return () => {
            document.body.style.backgroundColor = "";
        }
    })
    var{error,alert,Hide,setError,setAlert,UsernameTest}=useContext(ValidCon)



    var [name,setName]=useState("")
    function ChangeName(event)
    {
        setName(event.target.value)
    }


    
    function HandleSubmit(event){
        event.preventDefault()
        if(UsernameTest(name)){
            setAlert(true)
            setError("invalidUsername")
        }
    }
    
    return (
        <>
            <div id="AlertDiv">
                <Alert show={alert}>
                    <AlertHeading>{error}</AlertHeading>
                    <Button className="btn-close" onClick={Hide}></Button>
                </Alert>
            </div>
            <Container>
                <Row>
                    <Col id="registerCol">
                        <div>
                            <Form id="registerForm" onSubmit={HandleSubmit}>
                                <FormLabel>Register Panel</FormLabel>
                                <FormGroup>
                                    <FormControl type="text" value={name} onChange={ChangeName} placeholder="UserName" />
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
                                        <Button type="submit" id="submit" className="btn-primary">Submit</Button>
                                    </div>
                                </FormGroup>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>



    )
}

export default Register;