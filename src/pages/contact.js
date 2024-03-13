import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Contact = () => {
 const [state, setState] = useState({
      name: "",
      type: "",
      mail: "",
      message: ""
    })
  
    const handleChange = (e) =>{
      const {name, value} = e.target;
  
      setState({...state,[name]:value})
    }
  
    const onsubmit = (e) => {
      e.preventDefault();
  
      const 
      {
          name, 
          type,
          mail,
          message
      } = state

      function formatDate(date) {
        const year = date.toLocaleString('default', {year: 'numeric'});
        const month = date.toLocaleString('default', {
          month: '2-digit',
        });
        const day = date.toLocaleString('default', {day: '2-digit'});
      
        return [year, month, day].join('-');
      }

      const data = {
          name: name,
          date: formatDate(new Date()),
          type: type,
          mail: mail,
          message: message
      }
      console.log(data);
  
      axios.post("http://localhost:8000/customercare/add", data)
      .then((res) => {
        if(res.data){
          setState({
            name: "",
            type: "",
            mail: "",
            message: ""
          })
          alert("Feedback sent");
        }
      
      })
    }
  return (



  <div className='container '>
  <form className='row g-1 '>
  <h1>Contact</h1>
  <div>
  <div className="col-md-5">
        <label className="form-label">Customer Name</label>
        <input 
        type="text"
        name="name" 
        className='form-control'
        placeholder="Name"
        value={state.name}
        onChange={handleChange}
        />
    </div>
  </div>
    
  <div>
    <div className="col-md-5">
        <label className="form-label">Type</label>
        <select name="type" className='form-control'value={state.type} onChange={handleChange}>
          <option selected>Select Feedback type</option>
          <option value="Production">Production</option>
          <option value="Staff">Staff</option>
          <option value="Delivery">Delivery</option>
          <option value="Other">Other</option>
        </select>
    </div>
  </div>

  <div>
    <div className="col-md-5">
      <label className="form-label">Email</label>
        <input 
        type="email"
        name="mail" 
        className='form-control'
        placeholder="email"
        required
        value={state.mail}
        onChange={handleChange}
      />
    </div>
  </div>

  <div>
    <div className="col-md-5">
      <label className="form-label">Message</label>
      <textarea className="form-control"
        rows="5" 
        id="comment" 
        name="message"
        value={state.message}
        onChange={handleChange}
      ></textarea>
    </div>
  </div>
  
  <div>
    <button className='btn btn-success mt-4 col-md-4' type='submit' onClick={onsubmit}>
      Save
    </button>
  </div>
  </form>
  </div>

    <div> 
      contact
      <button className='btn btn-success mt-5' type='submit' onClick={onsubmit}>
         Save
      </button>

      </div>

  )
}

export default Contact