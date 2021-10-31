import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div>
            <img className="w-50 " src="https://i.ibb.co/qywQdcM/notfound.png" alt="" />
            </div>
            <Link to="/">
            <Button variant="outline-secondary">Back To Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;