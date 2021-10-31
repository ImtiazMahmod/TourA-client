import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {setUser,setIsloading, googleSignIn } = useAuth()
    //redirect to user destination
    const location = useLocation()
    const redirect_uri = location.state?.from || "/home"
    const history  = useHistory()
    const handleLogin = () => {
        googleSignIn()
        .then((result) => {
            setUser(result.user)
            history.push(redirect_uri)
          }).catch((error) => {
            
          })
            .finally(()=>setIsloading(false))
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col className="my-5 d-flex justify-content-center align-items-center" sm={12} md={6} lg={4}>
                        <div >
                        <h4 className="fw-bold text-secondary">LogIn With Google</h4>
                        <Button onClick={handleLogin} variant="outline-warning" className="w-100  btnRegular">
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