import React, { useState } from 'react'
import Header from '../../component/Header'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPay = () => {
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
          Payment
        } = state;
    
        const data = {
         OrderNo: OrderNo,
          PaymentId:PaymentId,
          Date:Date,
          CustomerName:CustomerName,
          Payment:Payment
        }
        console.log(data);
    
        axios.post("http://localhost:8000/payment/add", data)
        .then((res) => {
          alert("Payment added to payment history");
          navigate(-1);
        })
      }
  return (
    <>
    <div class="col">
        <Header dashboard={"Customer Payment History System"} />
    </div>
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col py-3">
            <div class="mt-5 mb-5 ">
                <h4>
                    <span class="badge text-bg-secondary">
                    Pay Add 
                    </span>
                </h4>
            </div>
            {/* table */}
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
        placeholder="Enter PaymentId of the post"
        value={state.PaymentId}
        onChange={handleChange}
        />
    </div>
  </div>
  <div class="row mt-4">
  <div class="col">
    <label class="form-label"> Date</label>
        <input 
        type="Date"
        name="Date" 
        className='form-control'
        placeholder="Enter  Date of the post"
        value={state. Date}
        onChange={handleChange}
        />
    </div>
    <div class="col">
    <label class="form-label">CustomerName</label>
        <input 
        type="text"
        name="CustomerName" 
        className='form-control'
        placeholder="Enter CustomerName of the post"
        value={state.CustomerName}
        onChange={handleChange}
        />
    </div>
    <div class="col">
    <label class="form-label"> Payment</label>
        <input 
        type="text"
        name="Payment" 
        className='form-control'
        placeholder="Enter Payment of the post"
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

export default AddPay