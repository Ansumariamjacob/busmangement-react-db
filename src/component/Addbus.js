import React, { useState } from 'react'

const Addbus = () => {
    var [Route,SetRoute]=useState("")
    var [Busname,SetBname]=useState("")
    var [Reno,SetRegno]=useState("")
    var [Owner,SetOwner]=useState("")
    var [Contactno,SetCno]=useState("")
    const subdata=()=>{
        const data={"Route":Route,"Busname":Busname,"Reno":Reno,"Owner":Owner,"Contactno":Contactno}
        console.log(data)
    }
  return (
    <div>
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Route</label></div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <input onChange={(e)=>{SetRoute(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Bus Name</label></div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <input onChange={(e)=>{SetBname(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Bus Registration Number</label></div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <input onChange={(e)=>{SetRegno(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Owner Name</label></div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <input onChange={(e)=>{SetOwner(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Contact Number</label></div>
                    <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <input onChange={(e)=>{SetCno(e.target.value)}} type="text" class="form-control"/>
                </div>

                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={subdata} class="btn btn-success">ADD</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Addbus