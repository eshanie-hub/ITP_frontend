import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../component/Header';


const EditPay = () => {
  const params = useParams();
    const navigate = useNavigate();
    const [state, setState] = useState({
      OrderNo: "",
      PaymentId: "",
      Date: "",
      CustomerName: "",
      Payment: "",
        
      })
    
      const handleChange = (e) =>{
        const {name, value} = e.target;
    
        setState({...state,[name]:value})
      }
    
      const onsubmit = (e) => {
        e.preventDefault();
    
        const 
        {
            OrderNo, 
            PaymentId, 
            Date,
            CustomerName,
            Payment,
            
        } = state;
    
        const data = {
          OrderNo: OrderNo,
          PaymentId: PaymentId,
          Date: Date,
          CustomerName: CustomerName,
          Payment: Payment,
            
        }
        
        
    
        axios.put(`http://localhost:8000/payment/update/${params.id}`, data)
        .then((res) => {
          alert("Data submited successfully");
          navigate(-1);
        })
      }
      
      useEffect(() => {
        axios.get(`http://localhost:8000/payment/get/${params.id}`).then((res) => {
          if(res.data){
            setState({
              OrderNo: res.data.OrderNo,
              PaymentId: res.data.PaymentId,
              Date: res.data.Date,
              CustomerName: res.data.CustomerName,
              Payment: res.data.Payment,
              
            })
            
          }
        })
      },[params.id]);
  return (
    <>
    <div class="col">
        <Header dashboard={"Payment history Management System"} />
    </div>
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col py-3">
            <div class="mt-5 mb-5 ">
                <h4>
                    <span class="badge text-bg-secondary">
                    Payment Add 
                    </span>
                </h4>
            </div>
          

  <div class="row mb-5">
    <div class="col">
        <label class="form-label">OrderNo</label>
        <input 
        type="text"
        name="OrderNo" 
        className='form-control'
        placeholder="Enter OrderNo of the post"
        value={state.OrderNo}
        onChange={handleChange}
        />
    </div>
    <div class="col-6">
    <label class="form-label">PaymentId</label>
        <input 
        type="text"
        name="PaymentId" 
        className='form-control'
        placeholder="Enter Payment id no of the post"
        value={state.PaymentId}
        onChange={handleChange}
        />
    </div>
  </div>
  <div class="row mt-4">
  <div class="col">
    <label class="form-label">Date</label>
        <input 
        type="text"
        name="Date" 
        className='form-control'
        placeholder="Enter date of the post"
        value={state.Date}
        onChange={handleChange}
        />
    </div>
    <div class="col">
    <label class="form-label">CustomerName</label>
        <input 
        type="text"
        name="CustomerName" 
        className='form-control'
        placeholder="Enter Customer name of the post"
        value={state.CustomerName}
        onChange={handleChange}
        />
    </div>
    <div class="col">
    <label class="form-label">Payment</label>
        <input 
        type="text"
        name="Payment" 
        className='form-control'
        placeholder="Enter payment of the post"
        value={state.Payment}
        onChange={handleChange}
        />
    </div>
    
  <button className='btn btn-success mt-5' type='submit' onClick={onsubmit}>
         Save
      </button>
</div>

          </div>
      </div>
    </div>
  </>
  )
}

export default EditPay