import React from 'react'
import Header from '../../component/Header';
const View = () => {
  return (
    <>
    <div class="col">
        <Header dashboard={"Customer Care System"} />
    </div>
    <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col py-3">
        Customer view
        <button className='btn btn-primary mt-5' type='submit'>
            <a href="./report"  style={{textDecoration: 'none', color:'white'}}>Report</a>
      </button>
        </div>
    </div>
</div>
</>
  )
}

export default View