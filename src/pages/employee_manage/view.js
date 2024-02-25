import React from 'react'
import Header from '../../component/Header';

const view = () => {
  return (
    <>
    <div class="col">
        <Header dashboard={"Employee Management System"} />
    </div>
    <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col py-3">
        employee view
        </div>
    </div>
</div>
</>
  )
}

export default view