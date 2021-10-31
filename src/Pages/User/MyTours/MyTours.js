import {  faWindowClose } from '@fortawesome/free-solid-svg-icons';
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
        axios.get(`https://obscure-forest-04277.herokuapp.com/myTours/${user?.email}`)
            .then(res => {
           setMyTours(res.data)
        })
    }, [update])
    
    //delete tour from user
    const handleDeleteTour = () => {
        const proceed = window.confirm('Are you sure to delete Tour Package')
        if (proceed) {
            axios.delete(`https://obscure-forest-04277.herokuapp.com/deleteMyTour/${user?.email}`)
            .then(res => {
                if (res.data.deletedCount) {
                    alert('oh! You are deleted a Tour')
                    setUpdate(true)
                }
                else {
                    setUpdate(false)
                }
        })
        }
    }

    
    return (
        <div>
            <Container style={{height:"35rem"}}>
                <h2 className="primaryColor">My Tours Details</h2>
           <Table responsive bordered hover>
            <thead >
                <tr>
                <th>#</th>
                <th>Package Name</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Size</th>
                
                <th> Cancel</th>
                </tr>
            </thead>
                    {
                        myTours?.map((tour, index) =>
                            <tbody key={ tour._id}>
                <tr className="text-secondary">
                <td>{index+1}</td>
                <td className="fw-bold">{tour?.title}</td>
                <td>{tour?.phone}</td>
                <td>{tour?.date}</td>
                <td>{tour?.size}</td>
                
                <td>
                 <Button onClick={handleDeleteTour} variant="outline-danger border-0">
                 <FontAwesomeIcon icon={faWindowClose}/></Button>
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