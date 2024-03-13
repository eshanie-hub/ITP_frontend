import React from 'react'
import Header from '../../component/Header'

const SalesExecutive_view = () => {
  return (
    <>
    <div class="col">
        <Header dashboard={"Order Placement System"} />
    </div>
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col py-3">
          Order placement SalesExecutive view update, delete
          <button className='btn btn-primary'>
                <a href="/pages/order_placement/add" style={{textDecoration: 'none', color:'white'}}>
                    create new Item
                </a>
            </button>
          </div>
      </div>
    </div>
  </>
  )
}

export default SalesExecutive_view