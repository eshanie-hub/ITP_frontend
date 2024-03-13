import React from 'react'
import Header from '../../component/Header'

const report = () => {
  return (
    <>
    <div class="col">
<<<<<<< HEAD
        <Header dashboard={"Delivery Management System"} />
=======

        <Header dashboard={"Delivery Management System"} />

>>>>>>> aae4c39573c4d38e21946b5cad21588e1069ce9f
    </div>
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col py-3">
            Delievery Report
            <button className='btn btn-primary mt-5' type='submit'>
            <a href="./Operator_view"  style={{textDecoration: 'none', color:'white'}}>Back</a>
            </button>
        </div>
        </div>
      </div>
    </>
  )
}

export default report