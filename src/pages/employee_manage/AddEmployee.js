import React, { useState } from 'react'
import Header from '../../component/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import { format } from "date-fns";



const AddEmployee = () => {
  const navigate = useNavigate();
  // const currentDate = new Date().toISOString();
  //const currentDate = format(ISODate(), 'yyyy-MM-dd'); // Get current date
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
        console.log(data);
    
        axios.post("http://localhost:8000/empDetails/add", data)
        .then((res) => {
          alert("Employee Details added Successfully");
          navigate(-1);
        })
      }
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
                    Add Employee
                    </span>
                </h4>
            </div>
            {/* table */}
            <div class="row mb-5">
    <div class="col">
        <label class="form-label">EmpID</label>
        <input 
        type="text"
        name="empID" 
        className='form-control'
        placeholder="Enter EmpNo of the employee"
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
        placeholder="Enter Name of the employee"
        value={state.name}
        onChange={handleChange}
        />
    </div>
  </div>
  <div class="row mt-4">
  <div class="col">
    <label class="form-label">Date Of Birth</label>
        <input 
        type="date"
        name="dateOfBirth" 
        className='form-control'
        placeholder="Enter dateOfBirth of the employee"
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
        placeholder="Enter Address of the employee"
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
        placeholder="Enter Contact Number of the employee"
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
        placeholder="Enter position of the employee"
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
        placeholder="Enter department of the employee"
        value={state.department}
        onChange={handleChange}
        />
    </div>
    <div class="col">
    <label class="form-label">Joined Date</label>
        <input 
        type="date"
        name="joinedDate" 
        className='form-control'
        placeholder="Enter position of the employee"
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

export default AddEmployee