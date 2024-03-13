import React from 'react'
import Header from '../../component/Header'

const Operator_view = () => {
  return (
    <>
      <div class="col">
          <Header dashboard={"Employee Management System"} />
      </div>
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <div class="col py-3">
          Operator_view employee manage
            get details from inventory view update delete
          {/* table */}
          <button className='btn btn-primary mt-5' type='submit'>
            <a href="./add"  style={{textDecoration: 'none', color:'white'}}>Add</a>
      </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Operator_view