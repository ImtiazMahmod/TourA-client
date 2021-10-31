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

  const today = new Date().toDateString()
  const time = new Date().toTimeString()
  const date = (`${today}  ${time}`).slice(0,22)
console.log(date);
    const inputStyle = "border-0  border-bottom p-2 m-2 shadow rounded";
    const errorStyle = 'text-danger text-start ms-2';
    return (
        <Container className="my-5">
            <Row>
          <Col md={6} className="d-none d-md-block ">
            <img className="mt-5 img-fluid" src="https://i.ibb.co/Hhdw1Vc/tour.jpg" alt="" />
            
            </Col>
            <Col sm={12} md={6}>
           <h3 className="fw-bold my-3">Add New Tour</h3>
    <form className="d-flex flex-column bg-light p-4 rounded" onSubmit={handleSubmit(onSubmit)}>
      
      <input className={inputStyle} style={{outline: "none"}} placeholder="Tour Title" {...register("title", { required: true })} />
      {errors.title && <span className={errorStyle}>This field is required</span>}
      
      <input type="number" className={inputStyle} style={{outline: "none"}} placeholder="Tour Fee" {...register("fee", { required: true })} />      
      {errors.fee && <span className={errorStyle}>This field is required</span>}
      
      <input  defaultValue={date} className={inputStyle} style={{ outline: "none" }}  {...register("date", { required: true })} />
      {errors.date && <span className={errorStyle}>This field is required</span>}
      
        <textarea rows="8"  className={inputStyle} style={{outline: "none"}} placeholder="Description on Tourist Place" {...register("desc", { required: true })} />
      {errors.desc && <span className={errorStyle}>This field is required</span>}
      
        <input className={inputStyle} style={{outline: "none"}} placeholder="Image URL1" {...register("img1", { required: true })} />
      {errors.img && <span className={errorStyle}>This field is required</span>}
      
      <input className={inputStyle} style={{outline: "none"}} placeholder="Image URL2" {...register("img2", { required: true })} />
      {errors.img && <span className={errorStyle}>This field is required</span>}
      
        <input className={inputStyle} style={{outline: "none"}} placeholder="Image URL3" {...register("img3", { required: true })} />
      {errors.img && <span className={errorStyle}>This field is required</span>}
      
      <input className="btn fw-bold btnRegular m-2"  value="Add Tour" type="submit" />
    </form>
            
        </Col>
        </Row>
        </Container>
    );
};

export default AddTours;