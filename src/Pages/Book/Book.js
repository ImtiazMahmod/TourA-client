import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';


const Book = ({ children }) => {
    const {user}= useAuth()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    
    const onSubmit = data => {
        data.status = 'pending'
        data.title = children?.title
    console.log(data)
    ///post for book tour
    axios.post('http://localhost:5000/bookTour', data)
        .then(res => {
            if (res.data.insertedId) {
                alert('WOW, you are Booked a Tour.')
                reset()
        }
    })
};
    const date = new Date().toISOString().substring(0,10)
    
const inputStyle = "border-0  border-bottom p-2 m-2 shadow rounded";
const errorStyle = 'text-danger text-start ms-2';
    return (
        <div>
              <h4 className="fw-bold my-3">Book This Package</h4>
    <form className="d-flex flex-column bg-light p-4 rounded" onSubmit={handleSubmit(onSubmit)}>
      
    <input defaultValue={user?.displayName } className={inputStyle} style={{ outline: "none" }} placeholder={`Your Full Name`} {...register("name", { required: true})} />
      {errors.name && <span className={errorStyle}>This field is required</span>}
                
                
     <input defaultValue={user?.email} type="email" className={inputStyle} style={{outline: "none"}} placeholder="Your Email" {...register("email", { required: true })} />      
     {errors.email && <span className={errorStyle}>This field is required</span>}
                
     <input className={inputStyle} style={{outline: "none"}} placeholder="Phone" {...register("phone", { required: true , pattern: /^\(?([0-9]{5})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/ })} />
     {errors.phone?.type==='required' && <span className={errorStyle}>This field is required</span>}
     {errors.phone?.type === 'pattern' && <span className={errorStyle}>Input a valid Phone Number</span>}
                
      <input type="date" className={inputStyle} style={{outline: "none"}} value={date} {...register("date", { required: true })} />
      {errors.date && <span className={errorStyle}>This field is required</span>}
                
      <textarea rows="8"  className={inputStyle} style={{outline: "none"}} placeholder="Message" {...register("message")} />
                        
      
      <input className="btn fw-bold m-2 btnRegular"  value="Book Now" type="submit" />
    </form>
        </div>
    );
};

export default Book;