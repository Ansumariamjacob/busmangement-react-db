import React, { useState } from 'react'

const Searchbus = () => {
    var [regno,setRegno]=useState("")
    const serData=()=>{
        const data={"registration number":regno}
        console.log(data)
    }
  return (
    <div>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Bus Registration Number</label>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <input onChange={(e)=>{setRegno(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={serData} class="btn btn-success">Search</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Searchbus