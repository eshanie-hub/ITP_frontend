import React from 'react'
import Header from '../../component/Header'

const Employee_Report = () => {
  return (
    <>
    <div class="col">
        <Header dashboard={"Employee Management System"} />
    </div>
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col py-3">
            Employee manager Report
            <button className='btn btn-primary mt-5' type='submit'>
            <a href="./Operator_view"  style={{textDecoration: 'none', color:'white'}}>Back</a>
            </button>
        </div>
        </div>
      </div>
    </>
  )
}

export default Employee_Report