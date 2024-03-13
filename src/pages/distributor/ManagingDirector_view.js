import React from 'react'
import Header from '../../component/Header'

const ManagingDirector_view = () => {
  return (
    <>
    <div class="col">
        <Header dashboard={"Distributor Management System"} />
    </div>
    <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col py-3">
        ManagingDirector_view distributor view
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