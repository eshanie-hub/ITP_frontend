import React, { useState } from 'react'
import Header from '../../component/Header'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddOrder = () => {
  const navigate = useNavigate();
    const [state, setState] = useState({
      customerName:"",
      distributorName:"",
      products:"",
      orderNo:"",
      orderType:"",
      amount:"",
      date:"",
      orderStatus:""
      })
    
      const handleChange = (e) =>{
        const {name, value} = e.target;
    
        setState({...state,[name]:value})
      }
    
      const onsubmit = (e) => {
        e.preventDefault();
    
        const 
        {
          customerName,
          distributorName,
          products,
          orderNo,
          orderType,
          amount,
          date,
          orderStatus
        } = state;
    
        const data = {
          customerName:customerName,
          distributorName:distributorName,
          products:products,
          orderNo:orderNo,
          orderType:orderType,
          amount:amount,
          date:date,
          orderStatus:orderStatus
        }
        console.log(data);
    
        axios.post("http://localhost:8000/order_placement/add", data)
        .then((res) => {
          alert("Item added to Order");
          navigate(-1);
        })
      }

  return (
    <>
    <div class="col">
        <Header dashboard={"Order Placement System"} />
    </div>
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col py-3">
            <div class="mt-5 mb-5 ">
                <h4>
                    <span class="badge text-bg-secondary">
                    Order Add 
                    </span>
                </h4>
            </div>
            
             <div class="row mb-5">
    <div class="col">
        <label class="form-label">CustomerName</label>
        <input 
        type="text"
        name="customerName" 
        className='form-control'
        placeholder="Enter customerName of the post"
        value={state.customerName}
        onChange={handleChange}
        />
    </div>
    <div class="col-6">
    <label class="form-label">DistributorName</label>
        <input 
        type="text"
        name="distributorName" 
        className='form-control'
        placeholder="Enter distributorName of the post"
        value={state.distributorName}
        onChange={handleChange}
        />
    </div>
  </div>
  <div class="row mt-4">
  <div class="col">
    <label class="form-label">Products</label>
        <input 
        type="text"
        name="products" 
        className='form-control'
        placeholder="Enter products of the post"
        value={state.products}
        onChange={handleChange}
        />
    </div>
    <div class="col">
    <label class="form-label">OrderNo</label>
        <input 
        type="text"
        name="orderNo" 
        className='form-control'
        placeholder="Enter orderNo of the post"
        value={state.orderNo}
        onChange={handleChange}
        />
    </div>
    <div class="col">
    <label class="form-label">OrderType</label>
        <input 
        type="text"
        name="orderType" 
        className='form-control'
        placeholder="Enter orderType of the post"
        value={state.orderType}
        onChange={handleChange}
        />
    </div>
    <div class="col">
    <label class="form-label">Amount</label>
        <input 
        type="text"
        name="amount" 
        className='form-control'
        placeholder="Enter amount of the post"
        value={state.amount}
        onChange={handleChange}
        />
    </div>
    <div class="col">
    <label class="form-label">Date</label>
        <input 
        type="date"
        name="date" 
        className='form-control'
        placeholder="Enter date of the post"
        value={state.date}
        onChange={handleChange}
        />
    </div>

    <div class="col">
    <label class="form-label">orderStatus</label>
        <input 
        type="text"
        name="orderStatus" 
        className='form-control'
        placeholder="Enter orderStatus of the post"
        value={state.orderStatus}
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

export default AddOrder