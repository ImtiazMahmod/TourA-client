import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const MyTours = () => {
    const {user}= useAuth()
    const [myTours, setMyTours] = useState([])
    const [update,setUpdate]= useState(null)
    ///load user matched tours
    useEffect(() => {
        axios.get(`http://localhost:5000/myTours/${user?.email}`)
            .then(res => {
           setMyTours(res.data)
        })
    }, [update])
    
    //delete tour from user
    const handleDeleteTour = () => {
        const proceed = window.confirm('Are you sure to delete Tour Package')
        if (proceed) {
            axios.delete(`http://localhost:5000/deleteMyTour/${user?.email}`)
            .then(res => {
                if (res.data.deleteCount) {
                    alert('oh! You are deleted a Tour')
                    setUpdate(true)
                }
                else {
                    setUpdate(false)
                }
        })
        }
    }

    //handle Status to update
    const handleStatus = () => {
        const status = 'approved'
        
    }
    return (
        <div>
            <Container>
                <h2>My Tours Details</h2>
           <Table responsive bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Package Name</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Status</th>
                <th></th>
                </tr>
            </thead>
                    {
                        myTours?.map((tour, index) =>
                            <tbody key={ tour._id}>
                <tr>
                <td>{index+1}</td>
                <td>{tour?.title}</td>
                <td>{tour?.phone}</td>
                <td>{tour?.date}</td>
                
                <td>
                {
                   tour?.status === 'pending' ? <Button onClick={handleStatus} variant="outline-secondary">{tour?.status}</Button>
                                                :
                   <Button variant="outline-success">{tour?.status}</Button>                             
                }
                </td>
                <td>
                 <Button onClick={handleDeleteTour} variant="outline-danger border-0">
                 <FontAwesomeIcon icon={faTrash}/></Button>
                </td>
                </tr>
            </tbody>
                            )
            }
            </Table>
            </Container>
        </div>
    );
};

export default MyTours;