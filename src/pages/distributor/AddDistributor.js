import React, { useState } from 'react'
import Header from '../../component/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddDistributor = () => {
  const navigate = useNavigate();
    const [state, setState] = useState({
      distributorId: "",
      distributorName: "",
      phoneNo: "",
      creditLimit: "",
      agreementStatus: "",
      date: "",
      })
    
      const handleChange = (e) =>{
        const {name, value} = e.target;
    
        setState({...state,[name]:value})
      }
    
      const onsubmit = (e) => {
        e.preventDefault();
    
        const 
        {
          distributorId, 
          distributorName, 
          phoneNo,
          creditLimit,
          agreementStatus,
          date
        } = state;
    
        const data = {
          distributorId: distributorId,
          distributorName: distributorName,
          phoneNo: phoneNo,
          creditLimit: creditLimit,
          agreementStatus: agreementStatus,
          date: date,
        }
        console.log(data);
    
        axios.post("http://localhost:8000/distributor/add", data)
        .then((res) => {
          alert("distributor added to system");
          navigate(-1);
        })
      }
  return (
    <>
    <div class="col">
        <Header dashboard={"Distributor Management System"} />
    </div>
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col py-3">
            <div class="mt-5 mb-5 ">
                <h4>
                    <span class="badge text-bg-secondary">
                    Distributor Add 
                    </span>
                </h4>
            </div>
            
            {/* table */}
  <div class="row mb-5">
    <div class="col">
        <label class="form-label">distributorId</label>
        <input 
        type="text"
        name="distributorId" 
        className='form-control'
        placeholder="Enter distributorId of the post"
        value={state.distributorId}
        onChange={handleChange}
        />
    </div>
    <div class="col-6">
    <label class="form-label">distributorName</label>
        <input 
        type="text"
        name="distributorName" 
        className='form-control'
        placeholder="Enter distributor of the post"
        value={state.distributorName}
        onChange={handleChange}
        />
    </div>
  </div>
  <div class="row mt-4">
  <div class="col">
    <label class="form-label">phoneNo</label>
        <input 
        type="text"
        name="phoneNo" 
        className='form-control'
        placeholder="Enter phoneNo of the post"
        value={state.phoneNo}
        onChange={handleChange}
        />
    </div>
    <div class="col">
    <label class="form-label">creditLimit</label>
        <input 
        type="text"
        name="creditLimit" 
        className='form-control'
        placeholder="Enter creditLimit of the post"
        value={state.creditLimit}
        onChange={handleChange}
        />
    </div>
    <div class="col">
    <label class="form-label">agreementStatus</label>
        <input 
        type="text"
        name="agreementStatus" 
        className='form-control'
        placeholder="Enter agreementStatus of the post"
        value={state.agreementStatus}
        onChange={handleChange}
        />
    </div>
    <div class="col">
    <label class="form-label">date</label>
        <input 
        type="date"
        name="date" 
        className='form-control'
        placeholder="Enter date of the post"
        value={state.date}
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

export default AddDistributor