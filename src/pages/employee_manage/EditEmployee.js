import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../component/Header';

const EditEmployee = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState({
    empID:"", 
    name:"", 
    dateOfBirth:"",
    address:"",
    contactNumber:"",
    position:"",
    department:"",
    joinedDate:"",
    })
  
    const handleChange = (e) =>{
      const {name, value} = e.target;
  
      setState({...state,[name]:value})
    }
  
    const onsubmit = (e) => {
      e.preventDefault();
  
      const 
      {
        empID,
        name,
        dateOfBirth,
        address,
        contactNumber,
        position,
        department,
        joinedDate
      } = state;
  
      const data = {
        empID:empID, 
        name:name, 
        dateOfBirth:dateOfBirth,
        address:address,
        contactNumber:contactNumber,
        position:position,
        department:department,
        joinedDate:joinedDate,
      }
      
      
  
      axios.put(`http://localhost:8000/empDetails/update/${params.id}`, data)
      .then((res) => {
        alert("Employee Details Updated Successfully");
        navigate(-1);
      })
    }
    
    useEffect(() => {
      axios.get(`http://localhost:8000/empDetails/get/${params.id}`).then((res) => {
        if(res.data){
          setState({
            empID: res.data.empID,
            name: res.data.name,
            dateOfBirth: res.data.dateOfBirth,
            address: res.data.address,
            contactNumber: res.data.contactNumber,
            position: res.data.position,
            department: res.data.department,
            joinedDate: res.data.joinedDate,
          })
          
        }
      })
    },[params.id]);
  return (
    <>
    <div class="col">
        <Header dashboard={"Employee Management System"} />
    </div>
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col py-3">
        <div class="mt-5 mb-5 ">
                <h4>
                    <span class="badge text-bg-secondary">
                    Employee Details Update
                    </span>
                </h4>
            </div>
            <div class="row mb-5">
    <div class="col">
        <label class="form-label">Emp ID</label>
        <input 
        type="text"
        name="empID" 
        className='form-control'
        placeholder="Enter Emp Id"
        value={state.empID}
        onChange={handleChange}
        />
    </div>
    <div class="col-6">
    <label class="form-label">Name</label>
        <input 
        type="text"
        name="name" 
        className='form-control'
        placeholder="Enter Name"
        value={state.name}
        onChange={handleChange}
        />
    </div>
  </div>
  <div class="row mt-4">
  <div class="col">
    <label class="form-label">Date Of Birth</label>
        <input 
        type="text"
        name="dateOfBirth" 
        className='form-control'
        placeholder="Enter Date Of Birth"
        value={state.dateOfBirth}
        onChange={handleChange}
        />
    </div>
    <div class="col">
    <label class="form-label">Address</label>
        <input 
        type="text"
        name="address" 
        className='form-control'
        placeholder="Enter Address"
        value={state.address}
        onChange={handleChange}
        />
    </div>
    <div class="col">
    <label class="form-label">Contact Number</label>
        <input 
        type="text"
        name="contactNumber" 
        className='form-control'
        placeholder="Enter Contact Number"
        value={state.contactNumber}
        onChange={handleChange}
        />
    </div>
    <div class="col">
    <label class="form-label">Position</label>
        <input 
        type="text"
        name="position" 
        className='form-control'
        placeholder="Enter Position"
        value={state.position}
        onChange={handleChange}
        />
    </div>
    <div class="col">
    <label class="form-label">Department</label>
        <input 
        type="text"
        name="department" 
        className='form-control'
        placeholder="Enter Department"
        value={state.department}
        onChange={handleChange}
        />
    </div>
    <div class="col">
    <label class="form-label">Joined Date</label>
        <input 
        type="text"
        name="joinedDate" 
        className='form-control'
        placeholder="Enter Joined Date"
        value={state.joinedDate}
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

export default EditEmployee