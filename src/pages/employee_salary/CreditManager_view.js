import React from 'react'
import Header from '../../component/Header'

const CreditManager_view = () => {
  return (
    <>
    <div class="col">
        <Header dashboard={"Employee Salary System"} />
    </div>
    <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col py-3">
        CreditManager_view employee salary view
        <button className='btn btn-primary mt-5' type='submit'>
            <a href="./add"  style={{textDecoration: 'none', color:'white'}}>Add</a>
      </button>
        </div>
        </div>
    </div>
    </>
  )
}

export default CreditManager_view