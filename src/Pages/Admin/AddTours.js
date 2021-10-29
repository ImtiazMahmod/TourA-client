import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddTours = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
    const onSubmit = data => {
        console.log(data)
        ///post for add tour
        axios.post('http://localhost:5000/addTour', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('WOW, you are added a new Tour.')
                    reset()
            }
        })
    };



    const inputStyle = "border-0  border-bottom p-2 m-2 shadow rounded";
    const errorStyle = 'text-danger text-start ms-2';
    return (
        <Container className="my-5">
            <Row>
            <Col md={8} className="d-none d-md-block"></Col>
            <Col sm={12} md={4}>
           <h3 className="fw-bold my-3">Add New Tour</h3>
    <form className="d-flex flex-column bg-light p-4 rounded" onSubmit={handleSubmit(onSubmit)}>
      
      <input className={inputStyle} style={{outline: "none"}} placeholder="Tour Title" {...register("title", { required: true })} />
      {errors.title && <span className={errorStyle}>This field is required</span>}
      
      <input type="number" className={inputStyle} style={{outline: "none"}} placeholder="Tour Fee" {...register("fee", { required: true })} />      
      {errors.fee && <span className={errorStyle}>This field is required</span>}
      
        <textarea rows="8"  className={inputStyle} style={{outline: "none"}} placeholder="Description on Tourist Place" {...register("desc", { required: true })} />
      {errors.desc && <span className={errorStyle}>This field is required</span>}
      
        <input className={inputStyle} style={{outline: "none"}} placeholder="Image URL" {...register("img", { required: true })} />
      {errors.img && <span className={errorStyle}>This field is required</span>}
      
      <input className="btn fw-bold" style={{ backgroundColor:"tomato",color:"white" }} value="Add Tour" type="submit" />
    </form>
            
        </Col>
        </Row>
        </Container>
    );
};

export default AddTours;