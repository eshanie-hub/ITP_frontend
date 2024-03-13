import React, { useEffect, useState } from 'react'
import Header from '../../component/Header';
import axios from 'axios'

const ManagingDirector_view = () => {
  const [state, setState] = useState({
    distributor: []
})

useEffect(() => {
    axios.get("http://localhost:8000/distributor/").then(res =>{
        if(res.data){
          setState({
            distributor:res.data
          })
        }
      })
    }, [state]);
  
  return (
    <>
    <div class="col">
        <Header dashboard={"Distributor Management System"} />
    </div>
    <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col py-3">
       {/* details */}
       <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">distributorId</th>
                    <th scope="col">distributorName</th>
                    <th scope="col">phoneNo</th>
                    <th scope="col">creditLimit</th>
                    <th scope="col">agreementStatus</th>
                    <th scope="col">date Count</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                {state.distributor.map((distributor, index) => (
                    <tr key={index}>
                    <td>{distributor.distributorId}</td>
                    <td>{distributor.distributorName}</td>
                    <td>{distributor.phoneNo}</td>
                    <td>{distributor.creditLimit}</td>
                    <td>{distributor.agreementStatus}</td>
                    <td>{distributor.date}</td>
                    <td>
                    <div class="d-grid gap-2">
                    <button type="button" class="btn btn-success btn-sm">
                        <a href={`/pages/distributor/edit/${distributor._id}`} style={{textDecoration: 'none', color:'white'}}>
                            update
                        </a>
                    </button>
                   </div>
                    </td>
                    </tr>
                ))}
                </tbody>
                </table>

        <button className='btn btn-primary mt-5' type='submit'>
            <a href="./report"  style={{textDecoration: 'none', color:'white'}}>Report</a>
      </button>
        </div>
        </div>
    </div>
    </>
  )
}

export default ManagingDirector_view