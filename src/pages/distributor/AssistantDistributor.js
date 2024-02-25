import React from 'react'
import Header from '../../component/Header'

const AssistantDistributor = () => {
  return (
    <>
    <div class="col">
        <Header dashboard={"Distributor Management System"} />
    </div>
    <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col py-3">
        Assistant distributor view
        <button className='btn btn-primary mt-5' type='submit'>
            <a href="./add"  style={{textDecoration: 'none', color:'white'}}>Add</a>
      </button>
        </div>
        </div>
    </div>
    </>
  )
}

export default AssistantDistributor