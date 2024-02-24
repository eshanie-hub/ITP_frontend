import React from 'react'
import Header from '../../component/Header'

const Payment_report = () => {
  return (
    <>
      <div class="col">
          <Header dashboard={"Customer Payment History System"} />
      </div>
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <div class="col py-3">
            Payment report
            </div>
        </div>
      </div>
    </>
  )
}

export default Payment_report