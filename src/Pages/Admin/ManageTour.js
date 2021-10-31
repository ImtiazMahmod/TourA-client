import { faEraser, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';

const ManageTourOrders = () => {
    const [orders,setOrders]= useState()
    ///load all order to manage
    useEffect(() => {
        axios.get('https://obscure-forest-04277.herokuapp.com/manageOrders')
            .then(res => {
                setOrders(res.data);
        })
    }, [orders])
    
    ///handle delete Order
    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are you sure to delete Order')
        if (proceed) {
            axios.delete(`https://obscure-forest-04277.herokuapp.com/deleteOrder/${id}`)
            .then(res => {
                if (res.data.deletedCount) {
               alert('Ops,You are deleted a Order?')
           }
        })
        }
    }

    //handle Status to update
    const handleStatus = (id) => {
        console.log(id);
        axios.put(`https://obscure-forest-04277.herokuapp.com/updateTour/${id}`)
            .then(res => {
                if (res.data.modifiedCount) {
                    alert('Your Tour is approved.')
                    
                }
               
        })
    }

    //delete all orders
    const handleDeleteAllOrder = () => {
        const check = window.confirm('Are you sure to Delete All Orders')
        if (check) {
            const proceed = window.confirm('Are you Delete All Orders?!')
        
        if (proceed) {
            axios.delete(`https://obscure-forest-04277.herokuapp.com/deleteAllOrders`)
                .then(res => {
                    if (res.data.deletedCount) {
                        alert('Ops,You are deleted all Orders.')
                    }
                })
            }
        }
    }
    return (
        <div>
            <Container style={{height:"33rem"}}>
                <h2 className="primaryColor">All Ordered Packages</h2>
                <Table responsive bordered hover>
            <thead >
                <tr>
                <th>#</th>
                <th>Package Name</th>
                <th>UserName</th>
                <th>Email</th>
                            <th>Size</th>
                            <th>Status</th>
                <th><FontAwesomeIcon icon={faTrash}/></th>
                </tr>
            </thead>
                    {
                        orders?.map((order, index) =>
             <tbody  className="text-secondary" key={ order._id}>
                <tr>
                <td>{index+1}</td>
                <td className="fw-bold">{order?.title}</td>
                <td>Mr/Miss {order?.name}</td>
                <td>{order?.email}</td>
                <td>{order?.size}</td>
                <td>
                {
                   order?.status === 'pending' ? <Button onClick={()=>handleStatus(order?._id)} variant="outline-secondary">{order?.status}</Button>
                                                :
                   <Button variant="success">{order?.status}</Button>                             
                }
                </td>
                <td>
                 <Button onClick={()=>handleDeleteOrder(order?._id)} variant="outline-danger border-0">
                 <FontAwesomeIcon icon={faTrash}/></Button> 
                </td>
                </tr>
            </tbody>
                            )
            }
                </Table>
                {
                    orders?.length>0 && <Button onClick={handleDeleteAllOrder} variant="outline-danger">
                    <FontAwesomeIcon icon={faEraser} />
                     Delete All Orders</Button>
                }
            </Container>
        </div>
    );
};

export default ManageTourOrders;