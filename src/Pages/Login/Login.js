import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const { googleSignIn } = useAuth()
    
    const handleLogin = () => {
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col className="my-5 d-flex justify-content-center align-items-center" sm={12} md={6} lg={4}>
                        <div >
                        <h4 className="fw-bold text-secondary">LogIn With Google</h4>
                        <Button onClick={googleSignIn} variant="outline-warning" className="w-100  btnRegular">
                            <FontAwesomeIcon icon={faGoogle} /> Google</Button>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;