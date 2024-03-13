import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../component/Header';

const EditCustomer = () => {
  const params = useParams();
    const navigate = useNavigate();
    const [state, setState] = useState({
        name: "",
        date: "",
        type: "",
        mail: "",
        message: "",
        status: "",
      })
    
      const handleChange = (e) =>{
        const {name, value} = e.target;
    
        setState({...state,[name]:value})
      }
    
      const onsubmit = (e) => {
        e.preventDefault();
    
        const 
        {
            status
        } = state;
    
        const data = {
            status: status,
        }
        
        
    
        axios.put(`http://localhost:8000/customercare/update/${params.id}`, data)
        .then((res) => {
          alert("Data submited successfully");
          navigate(-1);
        })
      }
      
      useEffect(() => {
        axios.get(`http://localhost:8000/customercare/get/${params.id}`).then((res) => {
          if(res.data){
            setState({
              name: res.data.name,
              date: res.data.date,
              type: res.data.type,
              mail: res.data.mail,
              message: res.data.message,
              status: res.data.status,
            })
            
          }
        })
      },[params.id]);
  return (
    <>
    <div class="col">
        <Header dashboard={"Customer Care System"} />
    </div>
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col py-3">
        <div class="mt-5 mb-5 ">
                <h4>
                    <span class="badge text-bg-secondary">
                    Update Customer Status
                    </span>
                </h4>
            </div>
            <div class="row mb-5">
    <div class="col">
        <label class="form-label">Cutomer Name</label>
        <input 
        type="text"
        name="name" 
        className='form-control'
        value={state.name}
        onChange={handleChange}
        disabled/>
    </div>
    <div class="col-6">
    <label class="form-label">Date</label>
        <input 
        type="text"
        name="date" 
        className='form-control'
        value={state.date}
        onChange={handleChange}
        disabled/>
    </div>
  </div>
  <div class="row mt-4">
  <div class="col">
    <label class="form-label">Type</label>
        <input 
        type="text"
        name="type" 
        className='form-control'
        value={state.type}
        onChange={handleChange}
        disabled/>
    </div>
    <div class="col">
    <label class="form-label">Mail</label>
        <input 
        type="text"
        name="size" 
        className='form-control'
        value={state.mail}
        onChange={handleChange}
        disabled/>
    </div>
    <div class="col">
    <label class="form-label">Message</label>
        <textarea className="form-control"
        rows="5" 
        id="comment" 
        name="message"
        value={state.message}
        onChange={handleChange}
        disabled
      ></textarea>
    </div>
    <div class="col">
    <label class="form-label">Status</label>
        <select name="status" className='form-control'value={state.status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="Resolved">Resolved</option>
          <option value="Cancel">Cancel</option>
        </select>
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

export default EditCustomer